import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;
  isPasswordMatch = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registerForm = fb.group({
      name: fb.control('', Validators.required),
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: fb.control('', [Validators.required]),
      gender: fb.control('male', [
        Validators.required,
        Validators.pattern('(^male$|^female$)'),
      ]),
      dateOfBirth: fb.control('', Validators.required),
      address: fb.control('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.authService.watch().valueChanges.subscribe(async (data) => {
      if (data.data.auth) {
        await this.router.navigateByUrl('/');
      }
    });
  }

  onSubmit(): void {
    if (this.registerForm.status === 'INVALID') {
      this.registerForm.markAllAsTouched();
      return;
    }

    const {
      name,
      email,
      password,
      confirmPassword,
      gender,
      dateOfBirth,
      address,
    } = this.registerForm.value;
    this.isPasswordMatch = password === confirmPassword;
    if (!this.isPasswordMatch) {
      this.registerForm.controls.confirmPassword.setErrors({
        confirmPassword: `Password doesn't match`,
      });
      return;
    }

    this.isLoading = true;

    this.registerService
      .mutate({
        name,
        email,
        password,
        gender,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
        address,
      })
      .subscribe(() => {
        this.isLoading = false;
        this.router.navigateByUrl('/login').then();
      });

    this.registerForm.reset();
  }
}
