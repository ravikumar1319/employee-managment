import { AfterViewChecked, Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { Store } from '@ngrx/store';
import { Login } from '../../../../models/login.models';
import { loginActions } from '../../../store/actions/login.action';
import { TitleConfigService } from '../../services/title-config.service';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'emp-aside',
  standalone: true,
  imports: [RouterModule, NavbarComponent, CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  menuOpen = false;
  menuItems = [
    { label: 'Home', route: '/' },
    { label: 'Add Employee', route: '/add' },
    { label: 'Reports', route: '/reports' },
    { label: 'Log out', route: '/auth/login', action: () => this.logOut() }
  ];
  isMobile: boolean = false;
  title: string | undefined;
  userName: string | undefined;
  bgColor: string | undefined;

  constructor(
    private store: Store<{ user: Login }>,
    private _titleConfigService: TitleConfigService
  ) {
    this.checkScreenSize();
    this._titleConfigService.title$.subscribe((title: string) => {
      this.title = title
    })

    const userDetails = localStorage.getItem('userDetails');
    if (userDetails) {
      const data = JSON.parse(userDetails)
      this.userName = data.userName.slice(0, 2)
      this.bgColor = data.profile;
    }
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.menuOpen = true; // Always open on desktop
    } else {
      this.menuOpen = false
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    if (this.isMobile) {
      this.menuOpen = false;
    }
  }

  logOut() {
    this.store.dispatch(loginActions.logout())
  }
}
