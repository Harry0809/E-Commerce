import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter valid email and password.';
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/auth/home']);
        } 
      },
      error: () => {
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/auth/register']); 
  }
}