import { Injectable } from '@angular/core';
import { titleConfig, getTitleConfigValue } from '../../config/title.config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleConfigService {
  title = new BehaviorSubject<string>('')
  title$ = this.title.asObservable()
  constructor() { }

  getTitle(url: string): Record<string, string> {
    // Convert "/employee/edit/123" => "employee.edit.123"
    let convertedUrl = url.replace(/^\//, "").replace(/\//g, ".");
  
    // Try exact match
    let title = getTitleConfigValue(convertedUrl);
  
    // If not found, try replacing last segment with "id"
    if (!title || title.title === "N/A") {
      const fallbackUrl = [...convertedUrl.split(".").slice(0, -1), "id"].join(".");
      title = getTitleConfigValue(fallbackUrl);
    }
  
    this.title.next(title.title);
    return title;
  }
  
}
