import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordViewComponent } from './reset-password-screen.component';

describe('ResetPasswordScreenComponent', () => {
    let component: ResetPasswordViewComponent;
    let fixture: ComponentFixture<ResetPasswordViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResetPasswordViewComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResetPasswordViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
