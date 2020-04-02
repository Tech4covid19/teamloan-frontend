import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeekerComponent } from './section-seeker.component';

describe('SectionSeekerComponent', () => {
    let component: SectionSeekerComponent;
    let fixture: ComponentFixture<SectionSeekerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SectionSeekerComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SectionSeekerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
