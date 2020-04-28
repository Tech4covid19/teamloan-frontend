import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AbsctractPostsListService } from 'src/app/components/posts-list/abstract-post-list.service';
import { PostsListFilterService } from 'src/app/components/posts-list/posts-list-filter.service';
import { PostsListModule } from 'src/app/components/posts-list/posts-list.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CompanyPostsListScreenRoutingModule } from 'src/app/screens/posts/company-posts-list/company-posts-list-screen.routing.module';
import { CompanyPostsListScreenService } from 'src/app/screens/posts/company-posts-list/company-posts-list-screen.service';
import { CompanyPostsListScreenComponent } from 'src/app/screens/posts/company-posts-list/components/company-posts-list-screen.component';
import { BusinessAreasService } from 'src/app/services/business-areas/business-areas.service';

@NgModule({
    declarations: [CompanyPostsListScreenComponent],
    imports: [CommonModule, CompanyPostsListScreenRoutingModule, MaterialModule, PostsListModule],
    providers: [
        PostsListFilterService,
        BusinessAreasService,
        {
            provide: AbsctractPostsListService,
            useClass: CompanyPostsListScreenService
        }
    ]
})
export class CompanyPostsListScreenModule {}
