import { Component, Input } from '@angular/core';
import { BaseControlValueAccessor } from 'src/app/form-tools/value-accessors/base.cva';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['../utils/input-base.scss', './input-text.component.scss']
})
export class InputTextComponent extends BaseControlValueAccessor {
    @Input()
    type = 'text';

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
