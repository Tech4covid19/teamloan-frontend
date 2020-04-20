import { Component, Input } from '@angular/core';
import { BaseControlValueAccessor } from 'src/app/form-tools/value-accessors/base.cva';

@Component({
    selector: 'app-input-textarea',
    templateUrl: './input-textarea.component.html',
    styleUrls: ['../utils/input-base.scss', './input-textarea.component.scss']
})
export class InputTextAreaComponent extends BaseControlValueAccessor {
    @Input()
    placeholder = '';

    public onUpdate($event: any) {
        if (!this.formControl.disabled) {
            this.value = $event.target.value;
            this.onChangeValue(this.value);
            this.markAsTouched();
            this.formControl.patchValue(this.value);
        }
    }
}
