import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginViewComponent } from './login-screen.component';

describe('LoginViewComponent', () => {
    let component: LoginViewComponent;
    let fixture: ComponentFixture<LoginViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginViewComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
