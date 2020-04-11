import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { BusinessArea, RegisterViewModel } from '../register-user.viewmodel';
import { Company } from 'src/app/models/company';

export class RegisterConverters {

    public static registerFormToPayload(registerViewModel: RegisterViewModel): Company {
        return new Company({
            uuid_business_area: registerViewModel.company.businessArea,
            name: registerViewModel.company.name,
            email: registerViewModel.user.email,
            vat: registerViewModel.company.nif,
            phone: registerViewModel.user.phone,
            'zip-code': registerViewModel.company.postalCode,
            password: registerViewModel.user.password
        });
    }

    public static businessAreaToInputOption(businessArea: BusinessArea): InputSelectOption {
        return {
            key: businessArea.uuid,
            label: businessArea.name
        };
    }

}