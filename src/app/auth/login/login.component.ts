import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FieldBase } from '../../shared/models/field-base';
import { InputTextField } from '../../shared/models/input-field';
import { CustomValidator } from '../../shared/utils/validators/custom.validtors';
import { FormComponent } from '../../shared/components/form/form.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'emp-login',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  fields$: Observable<FieldBase<any>[]> | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fields$ = this.getFields()
  }

  getFields(): Observable<FieldBase<any>[]> {
    return of([
      new InputTextField({
        key: 'userName',
        label: 'User Name',
        validators: [Validators.required, CustomValidator.noSpaceValidator],
        placeholder: 'Jane007',
      }),
      new InputTextField({
        key: 'password',
        label: 'Password',
        validators: [Validators.required, CustomValidator.noSpaceValidator],
        placeholder: 'Jane@007',
      })
    ]);
  }

  submitForm() {
    this.router.navigate(['/'])
  }
}
