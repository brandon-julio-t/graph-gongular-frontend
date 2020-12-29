import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { catchError } from 'rxjs/operators';
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
    if (this.loginForm.status === 'INVALID') {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    this.isLoading = true;

    this.loginService
      .mutate({ email, password })
      .pipe(
        catchError((e: ApolloError) => {
          this.isLoading = false;
          throw e;
        })
      )
      .subscribe((e) => {
        this.isLoading = false;
        this.router.navigateByUrl('/').then();
      });

    this.loginForm.reset();
  }
}
