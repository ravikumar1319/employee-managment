import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FieldBase } from '../../shared/models/field-base';
import { InputTextField, PasswordField } from '../../shared/models/input-field';
import { CustomValidator } from '../../shared/utils/validators/custom.validtors';
import { FormComponent } from '../../shared/components/form/form.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InputButtonComponent } from '../../shared/components/input-controls/input-button/input-button.component';

@Component({
  selector: 'emp-login',
  standalone: true,
  imports: [FormComponent, CommonModule, FormsModule, InputButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  data: any = { userName: '', password: '' }
  fields$: Observable<FieldBase<any>[]> | undefined;
  constructor(
    private router: Router,
    private _authService: AuthService
  ) { }

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
      new PasswordField({
        key: 'password',
        label: 'Password',
        validators: [Validators.required, CustomValidator.noSpaceValidator],
        placeholder: 'Jane@007',
      })
    ]);
  }

  submitForm(event:any) {
    console.log('Login clicked');
    this._authService.login(this.data).subscribe(() => {
      this.router.navigate(['/'])
    })
  }
}
