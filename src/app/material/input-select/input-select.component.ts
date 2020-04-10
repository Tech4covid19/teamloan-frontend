import { Component, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { BaseControlValueAccessor } from 'src/app/material/utils/base.cva';
import { NgControl } from '@angular/forms';

export interface InputSelectOption {
    key: any;
    label: string;
}

@Component({
    selector: 'app-input-select',
    templateUrl: './input-select.component.html',
    styleUrls: ['../utils/input-base.scss', './input-select.component.scss']
})
export class InputSelectComponent extends BaseControlValueAccessor {
    @Input()
    public placeholder = '';

    @Input()
    public set inputSelectOptions(inputSelectOptions: InputSelectOption[]) {
        this._inputSelectOptions = inputSelectOptions;
        this.filteredOptions = this._inputSelectOptions;
    }

    public get inputSelectOptions(): InputSelectOption[] {
        return this._inputSelectOptions;
    }

    public filteredOptions: InputSelectOption[] = [];

    public focus = false;

    public selectedValue: InputSelectOption;

    private _inputSelectOptions = [];

    constructor(public controlDir: NgControl, public elementRef: ElementRef) {
        super(controlDir);
    }

    public toggleFocus() {
        this.focus = !this.focus;
    }

    public onOptionSelect(option: InputSelectOption) {
        this.selectedValue = option;
        this.onChangeValue(option.key);
        this.toggleFocus();
    }

    public onSearch(event: any) {
        const query = event.target.value;
        if (query) {
            this.filteredOptions = this.inputSelectOptions.filter(
                option => option.label.indexOf(query) !== -1
            );
        } else {
            this.filteredOptions = this.inputSelectOptions;
        }
    }

    @HostListener('document:click', ['$event'])
    public onBlur(event: any) {
        if (this.focus && !this.elementRef.nativeElement.contains(event.target)) {
            this.toggleFocus();
        }
    }
}
