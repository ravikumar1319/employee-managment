import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms'
import { Observable, of } from 'rxjs';
import { FieldBase } from '../../shared/models/field-base';
import { InputTextField } from '../../shared/models/input-field';
import { CustomValidator } from '../../shared/utils/validators/custom.validtors';
import { FormComponent } from '../../shared/components/form/form.component';
import { InputButtonComponent } from '../../shared/components/input-controls/input-button/input-button.component';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'emp-employee-add',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule, FormComponent,InputButtonComponent,AsyncPipe],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent implements OnInit {

  fields$: Observable<FieldBase<any>[]> | undefined;
  constructor() { }

  ngOnInit(): void {
    this.fields$ = this.getFields()
  }

  getFields(): Observable<FieldBase<any>[]> {
    return of([
      new InputTextField({
        key: 'name',
        label: 'Name',
        validators: [Validators.required, CustomValidator.noSpecialCharactersValidator],
        placeholder:'Employee Name',
      }),
      new InputTextField({
        key: 'department',
        label: 'Department',
        validators: [Validators.required, CustomValidator.noSpecialCharactersValidator],
        placeholder:'Employee Department',
      })
    ]);
  }
}
