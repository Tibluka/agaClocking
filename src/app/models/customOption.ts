export class CustomOption {
    description: string = '';
    value: string;
    multiple: boolean;
    formControlName: string;
    selected: boolean;
    invalid: boolean = false;

    constructor(multiple: boolean, description: string, value: string, formControlName: string) {
        this.multiple = multiple;
        this.description = description;
        this.value = value;
        this.formControlName = formControlName;
    }
}