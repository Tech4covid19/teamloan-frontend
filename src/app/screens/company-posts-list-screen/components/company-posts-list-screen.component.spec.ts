import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsListScreenComponent } from 'src/app/screens/posts-list-screen/components/posts-list-screen.component';

describe('PostsListScreenComponent', () => {
    let component: PostsListScreenComponent;
    let fixture: ComponentFixture<PostsListScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostsListScreenComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostsListScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
