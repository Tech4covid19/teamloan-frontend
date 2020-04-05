import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesNoticeComponentComponent } from './cookies-notice.component';

describe('CookiesNoticeComponentComponent', () => {
    let component: CookiesNoticeComponentComponent;
    let fixture: ComponentFixture<CookiesNoticeComponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CookiesNoticeComponentComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CookiesNoticeComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
