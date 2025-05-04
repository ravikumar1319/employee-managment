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
  constructor(
    private _employeeServices: EmployeeService,
    private _socketService: SocketService
  ) {
    this._socketService.listen('reportReady').subscribe((res: any) => {
      console.log('Report generated...');
      console.log(res.url)
      this.reports = this.reports.map(ele => { return ele.id == res.id ? { ...ele, url: res.url, status: ReportStatus.COMPLETED } : ele })
      console.log(this.reports)
      // this.reports[0] = { id: 1, type: 'new', status: ReportStatus.COMPLETED, url: res.url };
    })
  }

  ngOnInit(): void {
    this.fields$ = this.getFields()
  }

  getFields(): Observable<FieldBase<any>[]> {
    return of([
      new InputTextField({
        value:'Employee',
        key: 'type',
        label: 'Report Name',
        validators: [Validators.required, CustomValidator.noSpaceValidator],
        placeholder: 'Employee',
      }),
    ]);
  }

  getReport(form: any) {
    const data: Partial<Reports> = form
    this._employeeServices.getReports(data).subscribe((res) => {
      this.reports.push(
        { id: res.id, type: data.type || '', status: ReportStatus.IN_PROGRESS, url: null }
      );
      console.log('Report generation started...');
      console.log(this.reports)

    })
  }
}
