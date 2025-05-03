import { FieldBase } from "./field-base";

export class InputTextField extends FieldBase<string> {
    override controlType = 'inputText';
    onChange?: any;
    constructor(options: any) {
        super(options)
        this.onChange = options.onChange || undefined;

    }
}
export class PasswordField extends FieldBase<string> {
    override controlType = 'password';
    onChange?: any;
  
    constructor(options: any) {
      super(options);
      this.onChange = options.onChange || undefined;
    }
  }
  export interface DropdownOption {
    key: string;
    value: string;
  }
  
  export class DropdownField extends FieldBase<string> {
    override controlType = 'dropdown';
    options: DropdownOption[] = [];
    onChange?: any;
  
    constructor(options: any) {
      super(options);
      this.options = options.options || [];
      this.onChange = options.onChange || undefined;
    }
  }
  