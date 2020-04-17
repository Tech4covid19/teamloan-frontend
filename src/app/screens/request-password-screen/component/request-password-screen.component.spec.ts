import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPasswordViewComponent } from './request-password-screen.component';

describe('RequestPasswordScreenComponent', () => {
    let component: RequestPasswordViewComponent;
    let fixture: ComponentFixture<RequestPasswordViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RequestPasswordViewComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RequestPasswordViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
