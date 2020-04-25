import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { BusinessArea, RegisterViewModel } from '../register-user.viewmodel';
import { Company } from 'src/app/models/company/company';

export class RegisterConverters {
    public static registerFormToPayload(registerViewModel: RegisterViewModel): Company {
        return new Company({
            'business-area': {
                uuid: registerViewModel.company.businessArea,
                name: ''
            },
            name: registerViewModel.company.name,
            email: registerViewModel.user.email,
            vat: registerViewModel.company.nif,
            phone: registerViewModel.user.phone,
            'zip-code': this.uniformZipCodeFormat(registerViewModel.company.postalCode),
            password: registerViewModel.user.password,
            intent: registerViewModel.company.intent
        });
    }

    public static businessAreaToInputOption(businessArea: BusinessArea): InputSelectOption {
        return {
            key: businessArea.uuid,
            label: businessArea.name
        };
    }

    private static uniformZipCodeFormat(zipCode: string): string {
        const regexWithDash = /^\d{4}-\d{3}?$/;

        if (regexWithDash.test(zipCode)) {
            return zipCode;
        }

        return zipCode.substring(0, 4) + '-' + zipCode.substring(4, 7);
    }
}
