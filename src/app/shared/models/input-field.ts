import { FieldBase } from "./field-base";

export class InputTextField extends FieldBase<string> {
    override controlType = 'inputText';
    onChange?: any;
    constructor(options: any) {
        super(options)
        this.onChange = options.onChange || undefined;

    }
}