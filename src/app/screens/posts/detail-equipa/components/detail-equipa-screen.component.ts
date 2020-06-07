import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeedbackInterface, FEEDBACK_STATUS } from 'src/app/components/feedback/feedback.interface';
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
    public closePostSuccessFeedback: FeedbackInterface = {
        status: FEEDBACK_STATUS.SUCCESS,
        title: 'Sucesso',
        subTitle: undefined,
        text: 'Publicação encerrada.',
        actionLabel: 'Voltar',
        url: '/posts/private'
    };
    public closePostForm: FormGroup;
    public closingPost: boolean = false;
    public closePostSubmitting: boolean = false;
    public closePostResponseError: boolean = false;
    public closePostResponseSuccess: boolean = false;
    public closePostSubmitted: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
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
        this.closePostSubmitted = false;
        this.closingPost = false;
        this.closePostSubmitting = false;
        this.closePostResponseError = false;
    }

    public onSubmitClosePostForm() {
        this.closePostSubmitted = true;

        if (this.closePostForm.valid) {
            this.closePostSubmitting = true;

            const postingUpdate = new Posting({
                closeReason: this.closePostForm.value.closeReason,
                closeReasonDetails: this.closePostForm.value.closeReasonDetails,
                jobs: null
            });

            this.onClosePostSuccess();
            // this.postingService
            //     .update(this.posting.uuid, this.posting.company.uuid, postingUpdate)
            //     .subscribe(
            //         resp => this.onClosePostSuccess(),
            //         err => this.onClosePostError()
            //     );
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
            closeReason: [null, Validators.required],
            closeReasonDetails: []
        });
    }

    private onClosePostSuccess() {
        this.closingPost = false;
        this.closePostSubmitting = false;
        this.closePostResponseSuccess = true;
        this.closePostResponseError = false;
    }

    private onClosePostError() {
        this.closePostSubmitting = false;
        this.closePostResponseError = true;
        this.closePostResponseSuccess = false;
    }
}
