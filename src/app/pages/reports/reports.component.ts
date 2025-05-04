import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FieldBase } from '../../shared/models/field-base';
import { InputTextField } from '../../shared/models/input-field';
import { CustomValidator } from '../../shared/utils/validators/custom.validtors';
import { AsyncPipe } from '@angular/common';
import { FormComponent } from '../../shared/components/form/form.component';
import { InputButtonComponent } from '../../shared/components/input-controls/input-button/input-button.component';
import { EmployeeService } from '../../services/employee.service';
import { Reports } from '../../../models/reports.model';
import { SocketService } from '../../services/socket.service';
import { ReportStatus } from '../../app.ENUM';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'emp-reports',
  standalone: true,
  imports: [AsyncPipe, FormComponent, InputButtonComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  fields$: Observable<FieldBase<any>[]> | undefined;
  reports: Reports[] = []
  progress: any;
  userDetails: Record<string, string>;
  constructor(
    private _employeeServices: EmployeeService,
    private _socketService: SocketService,
    private _authService: AuthService
  ) {
    this._socketService.listen('reportReady').subscribe((res: any) => {
      console.log('Report generated...');
      console.log(res.url)
      this.reports = this.reports.map(ele => { return ele.id == res.id ? { ...ele, url: res.url, status: ReportStatus.COMPLETED } : ele })
      console.log(this.reports)
    })

    this._socketService.listen('progress').subscribe((res: any) => {
      this.reports = this.reports.map(ele => { return ele.id == res.id ? { ...ele, progress: res.progress } : ele })
    })

    this.userDetails = this._authService.getUserDetails()
  }

  ngOnInit(): void {
    this.fields$ = this.getFields()
  }

  getFields(): Observable<FieldBase<any>[]> {
    return of([
      new InputTextField({
        value: 'Employee',
        key: 'type',
        label: 'Report Name',
        validators: [Validators.required, CustomValidator.noSpaceValidator],
        placeholder: 'Employee',
      }),
    ]);
  }

  getReport(form: any) {
    const data: Partial<Reports> = form
    this._employeeServices.getReports(data, this.userDetails['id']).subscribe((res) => {
      this.reports.push(
        { id: res.id, type: data.type || '', status: ReportStatus.IN_PROGRESS, url: null, progress: 0 }
      );
      console.log('Report generation started...');
      console.log(this.reports)

    })
  }
}
