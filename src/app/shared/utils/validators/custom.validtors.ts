import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";
import { RegexValidators } from "./regex.validators";

export class CustomValidator {

    static noSpecialCharactersValidator(control: AbstractControl): ValidationErrors | null {
        const forbidden = RegexValidators.name.test(control.value);
        if (control && control.value && control.value && (!forbidden || control.value.startsWith(' '))) {
            control.patchValue(control.value.slice(0, -1));
            control.updateValueAndValidity();
            control.markAsTouched();
        }
        if (control && (control.value == '' || control.value == null || control.value == undefined)) {
            if (control.hasValidator(Validators.required)) {
                return { required: true };
            } else {
                return null;
            }
        }
        return null;
    }

    static noSpaceValidator(control: AbstractControl): ValidationErrors | null {
        const forbidden = RegexValidators.noSpace.test(control.value)
        if (control && control.value && !forbidden) {
            control.patchValue(control.value.slice(0, -1));
            control.updateValueAndValidity();
            control.markAsTouched();
        }
        if (control && (control.value == '' || control.value == null || control.value == undefined)) {
            if (control.hasValidator(Validators.required)) {
                return { required: true };
            } else {
                return null;
            }
        }
        return null;

    }
}