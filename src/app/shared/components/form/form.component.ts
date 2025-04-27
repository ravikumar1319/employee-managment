import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControlService } from '../../services/form-control.service';
import { FieldBase } from '../../models/field-base';
import { FieldComponent } from '../field/field.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'emp-form',
  standalone: true,
  imports: [ReactiveFormsModule, FieldComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  @Input() fields: any[] | null = [];
  form!: FormGroup;
  @Input() formValidator!: any;
  payLoad = '';

  @Output() onFormSubmit = new EventEmitter<any>();
  @Output() onFormFocus = new EventEmitter<any>();
  @Output() onFormBlur = new EventEmitter<any>();

  @ContentChild('button', { static: true }) button !: TemplateRef<any>;

  @ContentChild('fieldTemplate', { static: true }) fieldTemplate !: TemplateRef<any>;

  constructor(private fcs: FormControlService) { }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields as FieldBase<any>[], this.formValidator)
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.onFormSubmit.emit(this.form.getRawValue());
  }

}
