import { OnDestroy, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormGeneratorService } from '../interfaces/form-generator.interface';
import { FormValidatorHandler } from '../validators/form-validator.handler';
import { FormNotifier } from '../validators/form-notifier.factory';

export abstract class SimpleFormValueAccessor<T> implements ControlValueAccessor, OnDestroy, OnInit {
    public form: FormGroup;
    private subscriptions: Subscription[] = [];

    @Input()
    public notifier: FormNotifier;

    set value(value: T) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get value(): T {
        return this.form.value;
    }

    constructor(private formService: FormGeneratorService) {
        this.form = this.formService.getForm();
        this.subscriptions.push(
            this.form.valueChanges.subscribe(value => {
              this.onChange(value);
              this.onTouched();
            })
        );
        this.subscriptions.push(
            this.form.valueChanges.subscribe(() =>
                FormValidatorHandler.updateValidationState(this.form, this.getErrors())
            )
        );
    }

    public abstract getErrors(): any;

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    ngOnInit() {
        const subscription = this.notifier.getObservable().subscribe(() => {
            FormValidatorHandler.markAllAsTouched(this.form);
            FormValidatorHandler.updateValidationState(this.form, this.getErrors());
        });
        this.subscriptions.push(subscription);
    }

    onChange: any = () => {};
    onTouched: any = () => {};

    registerOnChange(fn) {
        this.onChange = fn;
    }

    writeValue(value) {
        if (value) {
            this.value = value;
        }
        if (value === null) {
            this.form.reset();
        }
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
