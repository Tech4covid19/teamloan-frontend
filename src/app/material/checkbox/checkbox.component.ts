import { Component, Input } from '@angular/core';
import { BaseControlValueAccessor } from 'src/app/form-tools/value-accessors/base.cva';
import { generateUUID } from 'src/app/utils/uuid.utils';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseControlValueAccessor {
    @Input()
    public label: string;

    public id: string = generateUUID();

    public change(event: any) {
        if (this.formControl.disable && event && event.srcElement) {
            this.onChangeValue(!!event.srcElement.checked);
        }
    }
}
