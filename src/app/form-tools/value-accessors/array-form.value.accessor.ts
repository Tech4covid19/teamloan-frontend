import { SimpleFormValueAccessor } from './simple-form.value.accessor';
import { FormControl } from '@angular/forms';

export abstract class ArrayFormValueAccessor<T> extends SimpleFormValueAccessor<T> {

    set value(value: T) {

        if ( !value ) {
            return;
        }

        if ( !value[this.getFormArrayName()].length ) {
            return;
        }

        addMissingFormControls.call(this);
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();

        function addMissingFormControls() {
            let diff = value[this.getFormArrayName()].length - this.form.controls[this.getFormArrayName()].controls.length;
            let index = diff;
            while ( diff-- > 0 ) {
                this.form.controls[this.getFormArrayName()].setControl(++index, new FormControl(null));
            }
        }
    }

    public abstract getFormArrayName();

}
