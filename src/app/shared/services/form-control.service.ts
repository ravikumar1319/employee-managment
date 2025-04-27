import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  // toFormGroup(fields:any[], validators?: any) {
  //   const group: any = {};
  //   fields.forEach(field => {
  //     if(!['icon', 'nestedFormTemplate'].includes(field.controlType)){ 
  //       group[field.key] = new FormControl(field.value ?? '', field.validators);
  //     } else if(['nestedFormTemplate'].includes(field.controlType)) {
  //       const nestedGroup: any = {};
  //       field.fields.forEach((nField: any) => {
  //         nestedGroup[nField.key] = new FormControl(nField.value ?? '', nField.validators);
  //       });
  //       group[field.key] = new FormGroup(nestedGroup);
  //     }
  //   });
  //   if(validators){
  //     return new FormGroup(group, validators);
  //   } else {
  //     return new FormGroup(group); 
  //   }
  // }

  toFormGroup(fields: any[], validators?: any) {
    const group: any = {};
    fields.forEach(field => {
      group[field.key] = new FormControl(field.value ?? '', field.validators);
    })
    if (validators) {
      return new FormGroup(group, validators);
    } else {
      return new FormGroup(group);
    }
  }
}
