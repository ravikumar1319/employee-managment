import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextComponent } from '../input-controls/input-text/input-text.component';

@Component({
  selector: 'emp-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {
  @Input() field!: any;
  @Input() form!: FormGroup;

  hasError(type: string) {
    return this.form.controls[this.field.key].touched && this.form.controls[this.field.key].hasError(type);
  }

  validator(field: any): boolean {
    return this.form.controls[this.field.key].hasValidator(Validators.required) //&&  this.field.labelClass.includes('hidden');
  }
}
