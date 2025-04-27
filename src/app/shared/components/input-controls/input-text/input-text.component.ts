import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextField } from '../../../models/input-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'emp-input-text',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Input() field: InputTextField=new InputTextField({});
  @Input() mandatory: boolean=false;
}
