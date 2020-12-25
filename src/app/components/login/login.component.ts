import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { catchError, retry } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApolloError } from '@apollo/client/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.authService.watch().valueChanges.subscribe((data) => {
      if (data.data.auth) {
        this.router.navigateByUrl('/').then();
      }
    });
  }

  onSubmit(): void {
    const { email, password } = this.loginForm.controls;
    if (email.invalid || password.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this.loginService
      .watch({
        email: email.value,
        password: password.value,
      })
      .valueChanges.pipe(
        retry(3),
        catchError((e: ApolloError) => {
          this.snackBar.open(e.message, 'Close', { duration: 4000 });
          this.isLoading = false;
          throw e;
        })
      )
      .subscribe((e) => {
        console.log(e);
        this.isLoading = false;
        this.router.navigateByUrl('/').then();
      });

    this.loginForm.reset();
  }
}