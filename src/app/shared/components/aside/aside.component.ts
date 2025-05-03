import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'emp-aside',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  menuOpen = false;
  menuItems = [
    { label: 'Home', route: '/' },
    { label: 'Add Employee', route: '/add' },
    { label: 'Reports', route: '/reports' },
    { label: 'Log out', route: '/auth/login' }
  ];
  isMobile: boolean = false;

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    if (this.isMobile) {
      this.menuOpen = false;
    }
  }
}
