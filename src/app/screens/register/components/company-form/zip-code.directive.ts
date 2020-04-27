import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[zipCode]'
})
export class ZipCodeDirective {
    @HostListener('keyup', ['$event'])
    onInputChange(event) {
        this._applyZipCodeMask(event.srcElement, event.target.value);
    }

    private _applyZipCodeMask(element: any, zipCode: string) {
        const regex = /^\d{4,7}$/;
        if (regex.test(zipCode)) {
            element.value = zipCode.substring(0, 4) + '-' + zipCode.substring(4);
        }
    }
}
