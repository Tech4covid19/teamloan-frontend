import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from 'src/app/models/auth-user/auth-user';
import { INTENT } from 'src/app/models/intent.enum';
import { Posting } from 'src/app/models/posting/posting';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-detail-equipa-screen',
    templateUrl: './detail-equipa-screen.component.html',
    styleUrls: ['./detail-equipa-screen.component.scss']
})
export class DetailEquipaScreenComponent {
    public intents = INTENT;
    public hasPermission$: Observable<boolean>;
    public posting: Posting;

    public editPostUrl: string;

    public closingPost: boolean = false;
    public closePostReasonOptions$: Observable<InputSelectOption[]> = new Observable();
    public closePostForm: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private authUser: AuthUserService,
        private formBuilder: FormBuilder
    ) {
        this.posting = this.activatedRoute.snapshot.data.posting;
        this.hasPermission$ = this.hasPermissionToEdit(this.posting);
        this.editPostUrl = this.getEditPostUrl(this.posting);

        this.closePostForm = this.formBuilder.group({
            closePostReason: [null, Validators.required],
            closePostDetails: [null, Validators.required]
        });
    }

    public get closePostReasonControl(): FormControl {
        return this.closePostForm.get('closePostReason') as FormControl;
    }

    public openClosePostPopUp() {
        this.closingPost = true;
    }

    public closeClosePostPopUp() {
        this.closingPost = false;
    }

    private hasPermissionToEdit(posting: Posting): Observable<boolean> {
        return this.authUser
            .getAuthUser()
            .pipe(map((user: AuthUser) => posting.company.uuid === user.uuid));
    }

    private getEditPostUrl(posting: Posting) {
        return `/posts/private/${posting.uuid}/edit`;
    }
}
