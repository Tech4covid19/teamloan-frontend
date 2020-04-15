import { FormControl } from '@angular/forms';

export function NIFValidator(formControl: FormControl) {
    if ( !formControl.value ) {
        return null;
    }
    if ( !formControl.value.substr ) {
        return null;
    }
    if ( validateNIF(formControl.value) ) {
        return null;
    }
    return {
        format: true
    };
}

function validateNIF(str: string): any {
    let nif = str.toUpperCase();
    if (!/(PT)?([123568]\d{1}|45|7[0124579]|9[0189])(\d{7})/.test(nif)) {
        return false;
    }

    nif = nif.replace(/PT/, '');
    const checkDigit = (): number => {
        let c = 0;
        for (let i = 0; i < nif.length - 1; ++i) {
            c += Number(nif[i]) * (10 - i - 1);
        }
        c = 11 - (c % 11);
        return c >= 10 ? 0 : c;
    };

    return checkDigit() === Number(str.charAt(str.length - 1));
}

