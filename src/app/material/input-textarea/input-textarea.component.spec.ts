import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextAreaComponent } from './input-textarea.component';

describe('InputTextAreaComponent', () => {
    let component: InputTextAreaComponent;
    let fixture: ComponentFixture<InputTextAreaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputTextAreaComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputTextAreaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
