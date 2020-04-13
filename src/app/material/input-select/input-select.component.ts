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
    @ViewChild('searchBox')
    public searchBox: ElementRef;

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
        if (this.formControl.disable) {
            this.focus = !this.focus;
            if (this.focus) {
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

    public onOptionSelect(option: InputSelectOption) {
        this.selectedValue = option;
        this.onChangeValue(option.key);
        this.toggleFocus();
    }

    public onSearch(event: any) {
        const query = event.target.value.trim();
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
