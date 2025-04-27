import { ValidatorFn } from "@angular/forms"

export class FieldBase<T> {
    value: T | undefined;
    key: string;
    label: string;
    validators: ValidatorFn[];
    requiredErrorMessage: string;
    controlType: string;
    placeholder: string;
    constructor(options?: {
        value: T | undefined,
        key: string;
        label: string,
        validators?: ValidatorFn[] | undefined;
        requiredErrorMessage: string
        controlType: string;
        placeholder: string;
    }) {
        this.value = options?.value;
        this.key = options?.key || '';
        this.label = options?.label || '';
        this.validators = options?.validators || [];
        this.requiredErrorMessage = options?.requiredErrorMessage || '';
        this.controlType = options?.controlType || '';
        this.placeholder = options?.placeholder || '';
        ;
    }
}