import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AbsctractPostsListService } from 'src/app/components/posts-list/abstract-post-list.service';
import { PostsListFilterService } from 'src/app/components/posts-list/posts-list-filter.service';
import { PostsListModule } from 'src/app/components/posts-list/posts-list.module';
import { MaterialModule } from 'src/app/material/material.module';
import { PostsListScreenComponent } from 'src/app/screens/posts/posts-list/components/posts-list-screen.component';
import { PostsListScreenRoutingModule } from 'src/app/screens/posts/posts-list/posts-list-screen.routing.module';
import { PostsListScreenService } from 'src/app/screens/posts/posts-list/posts-list-screen.service';
import { BusinessAreasService } from 'src/app/services/business-areas/business-areas.service';

@NgModule({
    declarations: [PostsListScreenComponent],
    imports: [CommonModule, PostsListScreenRoutingModule, MaterialModule, PostsListModule],
    providers: [
        PostsListFilterService,
        BusinessAreasService,
        {
            provide: AbsctractPostsListService,
            useClass: PostsListScreenService
        }
    ]
})
export class PostsListScreenModule {}
