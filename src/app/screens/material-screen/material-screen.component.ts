import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { LinkInterface, LINK_ICON_SIZES } from 'src/app/material/link/link-icon.interface';
import { ACTIONS } from 'src/app/material/post-card/post-card.component';

@Component({
    selector: 'app-material-screen',
    templateUrl: './material-screen.component.html',
    styleUrls: ['./material-screen.component.scss']
})
export class MaterialScreenComponent {
    form: FormGroup;

    inputSelectOptionsSmall: InputSelectOption[] = [];

    inputSelectOptionsLarge: InputSelectOption[] = [];

    actions = [ACTIONS.CONTACT, ACTIONS.SHARE];

    linkRegular: LinkInterface = {
        label: 'Theme: REGULAR',
        icon: {
            url: '/assets/img/icons/linkedin.svg',
            theme: LINK_ICON_SIZES.REGULAR
        },
        url: 'https://www.linkedin.com/company/teamloan',
        external: true
    };

    linkSmall: LinkInterface = {
        label: 'Theme: SMALL',
        icon: {
            url: '/assets/img/icons/instagram.svg',
            theme: LINK_ICON_SIZES.SMALL
        },
        url: 'https://www.instagram.com/teamloan_/',
        external: true
    };

    linkLabel: LinkInterface = {
        label: 'No label',
        url: 'https://www.instagram.com/teamloan_/',
        external: true
    };

    postCard = {
        company: {
            'business-area': {
                name: 'Tecnologia, telecomunicações e media',
                uuid: 'f55d41b7-3d6d-42aa-86a1-226d98216093'
            },
            createdAt: '2020-04-12T02:24:34.111Z[UTC]',
            email: 'fake968@fake.com',
            emailVerified: true,
            name: 'Bordalo',
            phone: '912345678',
            updatedAt: '2020-04-12T02:24:34.111Z[UTC]',
            uuid: 'a2d1c7bb-a2f7-4273-8453-03c0599be24a',
            vat: '187654368',
            'zip-code': '4755-269'
        },
        createdAt: '2020-04-13T03:28:30.323Z[UTC]',
        district: {
            code: '03',
            name: 'Braga',
            uuid: '4f6808ad-8b20-e5b5-48cb-438b3a229cd8'
        },
        email: 'fake968@fake.com',
        intent: 'LEND',
        jobs: [
            {
                createdAt: '2020-04-13T03:28:30.356Z[UTC]',
                job: {
                    name: 'Empregado de limpeza ou trabalho doméstico',
                    uuid: '6d084423-aec7-48f9-8690-292ff0b744f2'
                },
                'number-of-people': 1,
                status: 'ACTIVE',
                updatedAt: '2020-04-13T03:28:30.356Z[UTC]',
                updatedStatusAt: '2020-04-13T03:28:30.188984Z[UTC]',
                uuid: '2199d46b-5c29-4c15-8393-d433173886fa'
            },
            {
                createdAt: '2020-04-13T03:28:30.389Z[UTC]',
                job: {
                    name: 'Agricultor',
                    uuid: 'c01623e6-e978-44b5-b064-39c448f05653'
                },
                'number-of-people': 2,
                status: 'ACTIVE',
                updatedAt: '2020-04-13T03:28:30.389Z[UTC]',
                updatedStatusAt: '2020-04-13T03:28:30.189077Z[UTC]',
                uuid: '14c3f227-cb08-49e1-afbd-4a0e149409d0'
            }
        ],
        municipality: {
            code: '02',
            name: 'Barcelos',
            uuid: 'c633949e-7493-e1e3-a50f-1a96307cc20d'
        },
        notes:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        phone: '912345678',
        status: 'ACTIVE',
        title: 'Equipa de agricultores (AgroTeam)',
        updatedAt: '2020-04-13T03:28:30.323Z[UTC]',
        updatedStatusAt: '2020-04-13T03:28:30.18896Z[UTC]',
        uuid: '751e44fe-061e-4731-bbf7-f15a4a023e04'
    };

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            inputText: ['', Validators.required],
            password: null,
            selectBoxSmall: null,
            selectBoxLarge: null,
            checkbox: null
        });

        for (let i = 0; i < 15; i++) {
            this.inputSelectOptionsSmall.push({
                key: `key${i}`,
                label: `Option ${i}`
            });

            this.inputSelectOptionsLarge.push({
                key: `key${i}`,
                label: `Option random large text Option random large text Option random large text Option random large text ${i}`
            });
        }
    }

    onFilterToolbarChange(event) {
        console.log(event);
    }
}
