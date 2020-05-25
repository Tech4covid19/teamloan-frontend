import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from 'src/app/models/auth-user/auth-user';
import { INTENT } from 'src/app/models/intent.enum';
import { Posting } from 'src/app/models/posting/posting';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { PostingService } from 'src/app/services/posting/posting.service';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClosePostReasonsService } from 'src/app/services/posting/close-post-reasons.service';
import { getInputSelectOptions } from 'src/app/utils/input-select-option.utils';

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
    public submittingClosePost: boolean = false;
    public closePostResponseError: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private authUser: AuthUserService,
        private formBuilder: FormBuilder,
        private postingService: PostingService,
        private closePostReasonsService: ClosePostReasonsService
    ) {
        this.posting = this.activatedRoute.snapshot.data.posting;
        this.hasPermission$ = this.hasPermissionToEdit(this.posting);
        this.editPostUrl = this.getEditPostUrl(this.posting);

        if (this.hasPermission$) {
            this.initializeClosingPostForm();
        }
    }

    public get closePostReasonControl(): FormControl {
        return this.closePostForm.get('closePostReason') as FormControl;
    }

    public get closePostDetailsControl(): FormControl {
        return this.closePostForm.get('closePostDetails') as FormControl;
    }

    public openClosePostPopUp() {
        this.closingPost = true;
        console.log('opening popup');
        console.log(this.closePostReasonControl.errors);
    }

    public closeClosePostPopUp() {
        this.closingPost = false;
        this.submittingClosePost = false;
        this.closePostResponseError = false;
    }

    public onSubmitClosePostForm() {
        console.log('valid form: ' + this.closePostForm.valid);

        if (this.closePostForm.valid) {
            this.submittingClosePost = true;

            // TODO: ask to BE the status and fill here closing reason and details
            // TODO: remove this 'foo bar' test
            this.posting.notes = 'foo bar';
            console.log(this.closePostReasonControl.value);
            console.log(this.closePostDetailsControl.value);

            this.postingService
                .update(this.posting.uuid, this.posting.company.uuid, this.posting)
                .subscribe(
                    resp => this.onClosePostSuccess(),
                    err => this.onClosePostError()
                );
        }
    }

    private hasPermissionToEdit(posting: Posting): Observable<boolean> {
        return this.authUser
            .getAuthUser()
            .pipe(map((user: AuthUser) => posting.company.uuid === user.uuid));
    }

    private getEditPostUrl(posting: Posting) {
        return `/posts/private/${posting.uuid}/edit`;
    }

    private initializeClosingPostForm() {
        this.closePostForm = this.formBuilder.group({
            closePostReason: [null, Validators.required],
            closePostDetails: []
        });
        console.log('INIT');
        console.log(this.closePostReasonControl.errors);
        // TODO: Why this is initializing with required = true?
        //this.closePostReasonControl.errors.required = false;

        console.log(this.closePostReasonControl.errors);

        // TODO: Get reasons
        this.closePostReasonOptions$ = this.closePostReasonsService
            .get()
            .pipe(map(items => getInputSelectOptions(items)));
    }

    private onClosePostSuccess() {
        // TODO: exibir mensagem de sucesso??
        this.submittingClosePost = false;
        this.closingPost = false;
    }

    private onClosePostError() {
        this.submittingClosePost = false;
        this.closePostResponseError = true;
    }
}
