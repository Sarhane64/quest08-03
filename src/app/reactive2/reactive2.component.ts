import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive2.component.html',
  styleUrl: './reactive2.component.css',
})
export class Reactive2Component {
  formBuilder = inject(FormBuilder);

  signUpForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.group(
      {
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.checkEqualityValidator('password', 'confirmPassword'),
      }
    ),
    adress: this.formBuilder.group({
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
    }),
  });

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  checkEqualityValidator(
    controlName1: string,
    controlName2: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get(controlName1);
      const confirmPassword = control.get(controlName2);

      const isValid = password?.value === confirmPassword?.value;
      return isValid ? null : { notEqual: true };
    };
  }
}
