import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { TitleConfigService } from './shared/services/title-config.service';

@Component({
  selector: 'emp-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private _titleService: TitleConfigService,
    private webtitle: Title,
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) => {
      const data = this._titleService.getTitle(event.urlAfterRedirects)
      if (data && data['title']) {
        this.webtitle.setTitle(data['title']);
      }
    });
  }
}
