import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest, LoginService } from '@core/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'money-tolia-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly formBuilder = inject(FormBuilder);
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  logoPath = 'assets/logo.png';

  loginForm = this.formBuilder.group({
    username: ['admin', [Validators.required]],
    password: ['admin', [Validators.required]]
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.loginForm.value as LoginRequest).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/'], { relativeTo: this.route });
      } else {
        Swal.fire({
          icon: 'error',
          html: response.resultMessage.message,
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#4caf50',
        });
      }
    });

  }

}
