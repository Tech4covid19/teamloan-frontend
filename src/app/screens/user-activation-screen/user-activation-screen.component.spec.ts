import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivationScreenComponent } from './user-activation-screen.component';

describe('UserActivationScreenComponent', () => {
    let component: UserActivationScreenComponent;
    let fixture: ComponentFixture<UserActivationScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserActivationScreenComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserActivationScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
