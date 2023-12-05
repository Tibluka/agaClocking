import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { CustomOption } from '../../models/customOption';

@Component({
  selector: 'app-custom-multiple-select',
  templateUrl: './custom-multiple-select.component.html',
  styleUrls: ['./custom-multiple-select.component.scss']
})
export class CustomMultipleSelectComponent {
  @Input() bordered: boolean = false;
  @ViewChild('main') main: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const targetElement = event.target as HTMLElement;
    if (this.dropdownStatus) {
      if (!this.main.nativeElement.contains(targetElement) && this.dropdownStatus) {
        this.dropdownStatus = false;
      }
    }
  }

  dropdownStatus: boolean = false;

  @Input() type: string;
  @Input() inicialValue: string = '';
  @Input() value: Array<CustomOption>;
  @Input() label: string;
  @Input() options: Array<CustomOption> = [];
  @Input() disabled: boolean = false;
  @Input() titleGray: boolean = false;
  @Input() invalid: boolean = false;
  @Input() length: number;

  @Output() selectOptionEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.value = this.inicialValue as any;

    if (this.inicialValue) {
      let customOption = this.options.find(c => c.value === this.inicialValue);
      if (customOption) this.selectOption(customOption);
    }
  }

  openOptions() {
    if (this.disabled || this.options.length == 0) return;
    
    setTimeout(() => {
      this.dropdownStatus = true;
    }, 1);
  }

  selectOneOfMultiple(event: Event, option: CustomOption) {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;

    if (!Array.isArray(this.value)) this.value = [];

    if (isChecked) {
      this.value.push(option);
    } else {
      const optionIndex = this.value.findIndex(o => o.value === option.value);
      this.value.splice(optionIndex, 1);
      if (this.value.length === 0) this.value = this.inicialValue as any;
    }
  }

  selectAll() {
    const incomplete = this.options.filter(o => !o.selected).length > 0;
    if (incomplete) {
      this.options.map(o => o.selected = true);
      this.value = this.options;
    }
    else {
      this.options.map(o => o.selected = false);
      this.value = this.inicialValue as any;
    }
  }

  selectOption(customOption: CustomOption) {
    this.selectOptionEmitter.emit(customOption);
    this.value = [customOption];
    setTimeout(() => {
      this.dropdownStatus = false;
    }, 10);
  }

  getValue() {
    if (Array.isArray(this.value)) {
      return this.value.map(o => o.description)?.join(',');
    } else if (this.inicialValue) {
      return this.inicialValue;
    } else return this.value;

  }

}
