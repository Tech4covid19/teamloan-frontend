import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InputSelectOption } from 'src/app/material/input-select/input-select.component';
import { AuthUser } from 'src/app/models/auth-user/auth-user';
import { INTENT } from 'src/app/models/intent.enum';
import { CLOSE_REASON } from 'src/app/models/posting/close-reason.enum';
import { Posting } from 'src/app/models/posting/posting';
import { AuthUserService } from 'src/app/services/auth/auth-user.service';
import { PostingService } from 'src/app/services/posting/posting.service';

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
    public closeReasonOptions: InputSelectOption[] = [
        {
            key: CLOSE_REASON.MATCH,
            label: 'Reforçei/Partilhei equipa pelo TeamLoan'
        },
        {
            key: CLOSE_REASON.EXTERNAL_MATCH,
            label: 'Resolvi fora do TeamLoan'
        },
        {
            key: CLOSE_REASON.NO_MORE_NEED,
            label: 'A atividade da empresa normalizou'
        },
        {
            key: CLOSE_REASON.OTHER,
            label: 'Outro motivo – qual?'
        }
    ];
    public closePostForm: FormGroup;
    public submittingClosePost: boolean = false;
    public closePostResponseError: boolean = false;
    public closePostResponseSuccess: boolean = false;
    public submitted: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private authUser: AuthUserService,
        private formBuilder: FormBuilder,
        private postingService: PostingService
    ) {
        this.posting = this.activatedRoute.snapshot.data.posting;
        this.hasPermission$ = this.hasPermissionToEdit(this.posting);
        this.editPostUrl = this.getEditPostUrl(this.posting);

        if (this.hasPermission$) {
            this.initializeClosingPostForm();
        }
    }

    public get closeReasonControl(): FormControl {
        return this.closePostForm.get('closeReason') as FormControl;
    }

    public get closeReasonDetailsControl(): FormControl {
        return this.closePostForm.get('closeReasonDetails') as FormControl;
    }

    public openClosePostPopUp() {
        this.closingPost = true;
    }

    public closeClosePostPopUp() {
        this.submitted = false;
        this.closingPost = false;
        this.submittingClosePost = false;
        this.closePostResponseError = false;
    }

    public onSubmitClosePostForm() {
        this.submitted = true;

        if (this.closePostForm.valid) {
            this.submittingClosePost = true;

            const postingUpdate = new Posting({
                closeReason: this.closePostForm.value.closeReason,
                closeReasonDetails: this.closePostForm.value.closeReasonDetails,
                jobs: null
            });

            this.postingService
                .update(this.posting.uuid, this.posting.company.uuid, postingUpdate)
                .subscribe(
                    resp => this.onClosePostSuccess(),
                    err => this.onClosePostError()
                );
        }
    }

    public onFeedbackDismissed() {
        this.location.back(); // TODO: replace by "posts/private" URL
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
            closeReason: [null, Validators.required],
            closeReasonDetails: []
        });

        // TODO: try to use feedback inside pop up for feedbacking

        // TODO: Why this is initializing with required = true  ?
        this.closeReasonControl.errors.required = false;
    }

    private onClosePostSuccess() {
        this.submittingClosePost = false;
        this.closingPost = false;
        this.closePostResponseSuccess = true;
        this.closePostResponseError = false;

        // TODO: less booleans!
    }

    private onClosePostError() {
        this.submittingClosePost = false;
        this.closePostResponseError = true;
        this.closePostResponseSuccess = false;
    }
}
