import { Component, Input } from '@angular/core';
import { InputTextField } from '../../../models/input-field';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'emp-input-password',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent {
  @Input() field: InputTextField = new InputTextField({});
  @Input() mandatory: boolean = false;
}
