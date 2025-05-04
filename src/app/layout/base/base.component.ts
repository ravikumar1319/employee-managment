import { Component } from '@angular/core';
import { AsideComponent } from '../../shared/components/aside/aside.component';

@Component({
  selector: 'emp-base',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

  constructor() { }

}
