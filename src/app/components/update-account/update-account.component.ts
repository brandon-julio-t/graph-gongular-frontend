import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { UpdateAccountService } from '../../services/update-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss'],
})
export class UpdateAccountComponent implements OnInit {
  user: User | null = null;
  updateAccountForm: FormGroup;
  isLoading = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private updateAccountService: UpdateAccountService,
    private router: Router
  ) {
    this.updateAccountForm = fb.group({
      name: fb.control('', Validators.required),
      email: fb.control('', [Validators.required, Validators.email]),
      gender: fb.control('Male', [
        Validators.required,
        Validators.pattern('(^male$|^female$)'),
      ]),
      dateOfBirth: fb.control('', Validators.required),
      address: fb.control('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.authService.watch().valueChanges.subscribe((data) => {
      this.user = data.data.auth;

      const {
        name,
        email,
        gender,
        dateOfBirth,
        address,
      } = this.updateAccountForm.controls;

      name.setValue(this.user?.name);
      email.setValue(this.user?.email);
      gender.setValue(this.user?.gender);
      dateOfBirth.setValue(new Date(this.user?.dateOfBirth as string));
      address.setValue(this.user?.address);

      this.isLoading = false;
    });
  }

  onSubmit(): void {
    if (this.updateAccountForm.status === 'INVALID') {
      this.updateAccountForm.markAllAsTouched();
      return;
    }

    const {
      name,
      email,
      gender,
      dateOfBirth,
      address,
    } = this.updateAccountForm.value;

    this.isLoading = true;

    this.updateAccountService
      .mutate({
        name,
        email,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
        gender,
        address,
      })
      .subscribe((data) => {
        if (data.data?.updateAccount) {
          this.router.navigateByUrl('/account').then();
          this.isLoading = false;
        }
      });
  }
}
