import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/app/form-tools/value-accessors/base.cva';

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
    @ViewChild('searchBox')
    public searchBox: ElementRef;

    @Input()
    public placeholder = '';

    public filteredOptions: InputSelectOption[] = [];

    public focus = false;

    public selectedValue: InputSelectOption;

    private _inputSelectOptions = [];

    constructor(public controlDir: NgControl, public elementRef: ElementRef) {
        super(controlDir);
    }

    @Input()
    public set inputSelectOptions(inputSelectOptions: InputSelectOption[]) {
        this._inputSelectOptions = inputSelectOptions;
        this.filteredOptions = this._inputSelectOptions;
    }

    public get inputSelectOptions(): InputSelectOption[] {
        return this._inputSelectOptions;
    }

    writeValue(obj: any): void {
        this.value = obj;
        let selectedOption = null;
        if (obj) {
            selectedOption = this.inputSelectOptions.find(option => option.key === obj);
        }
        this.selectedValue = selectedOption;
    }

    public toggleFocus() {
        if (this.formControl.disable) {
            this.focus = !this.focus;
            if (this.searchBox && this.focus) {
                setTimeout(() => this.searchBox.nativeElement.focus(), 300);
            }
        }
    }

    public onSelectChange(event: any) {
        const value = event.srcElement.value;
        let selectedOption = null;
        if (value) {
            selectedOption = this.inputSelectOptions.find(option => option.key === value);
        }
        this.onOptionSelect(selectedOption);
    }

    public onOptionSelect(option?: InputSelectOption) {
        const value = option ? option.key : '';
        this.selectedValue = option;
        this.onChangeValue(value);
        this.toggleFocus();
    }

    public onSearch(event: any) {
        const query = event.target.value.trim().toLocaleLowerCase();

        if (query) {
            this.filteredOptions = this.inputSelectOptions.filter(
                option => option.label.trim().toLocaleLowerCase().indexOf(query) !== -1
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
