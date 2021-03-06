import { Component, Input } from '@angular/core';
import { THEME } from 'src/app/material/button/button.component';
import { District } from 'src/app/models/district/district';
import { Posting } from 'src/app/models/posting/posting';
import { Jobs } from 'src/app/models/jobs/jobs';

export enum ACTIONS {
    CONTACT = 'contact',
    SHARE = 'share'
}

interface JobsGroup {
    uuid: string;
    name: string;
    count: number;
}

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
    public actionsMap = ACTIONS;

    public buttonTheme = THEME.SMALL_ACTION;

    public buttonsAction: any = {};

    public cover: string;

    public jobsGroup: JobsGroup[] = [];

    public totalJobs = 0;

    public maxJobs = 5;

    private _actions: string[];

    private _postCard: Posting;

    @Input()
    public set postCard(postCard: Posting) {
        this._postCard = postCard;
        this.cover = this._getCoverUrl(this._postCard.intent, this._postCard.district);
        const jobsGroup = this._getJobs(this._postCard.jobs);
        this.totalJobs = jobsGroup.length;
        this._postCard.totalPeople = this._getTotalPeople(this._postCard.jobs);
        this.jobsGroup = jobsGroup.slice(0, this.maxJobs);
    }

    public get postCard(): Posting {
        return this._postCard;
    }

    @Input()
    public set actions(actions: string[]) {
        this._actions = actions;
        actions.map(action => {
            this.buttonsAction[action] = true;
        });
    }

    public get actions(): string[] {
        return this._actions;
    }

    private _getCoverUrl(intent: string, district: District): string {
        if (district.name) {
            return `/assets/img/districts/${intent}_${district.uuid}.jpg`.toLocaleLowerCase();
        } else {
            return '';
        }
    }

    private _getJobs(jobsList: Jobs[]): JobsGroup[] {
        const jobsGroup = [];
        if (jobsList.length) {
            jobsList.map(jobs => {
                const job = jobs.job;
                const index = jobsGroup.findIndex(jobElem => jobElem.uuid === job.uuid);
                if (index === -1) {
                    jobsGroup.push({ ...job, ...{ count: jobs['number-of-people'] } });
                } else {
                    jobsGroup[index].count += jobs['number-of-people'];
                }
            });
        }

        jobsGroup.sort((job1, job2) =>
            job1.name > job2.name ? 1 : job2.name > job1.name ? -1 : 0
        );

        return jobsGroup;
    }

    private _getTotalPeople(jobsList: Jobs[]): number {
        let numPeopleList = jobsList.map(j => j['number-of-people']);
        return numPeopleList.reduce((numPeopleSum, numPeople) => numPeopleSum + numPeople);
    }
}
