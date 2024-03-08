import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactiveformtest',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveformtest.component.html',
  styleUrl: './reactiveformtest.component.css',
})
export class ReactiveformtestComponent {
  fb = inject(FormBuilder);

  signUpForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    adress: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: 0,
    }),
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
      },
      {
        validator: this.checkIfSame('password', 'confirmPassword'),
      }
    ),
  });

  checkIfSame(passone: string, passtwo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(passone);
      const confirmPassword = control.get(passtwo);

      const isValid = password?.value === confirmPassword?.value;
      return isValid ? null : { not_valid: true };
    };
  }
  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
