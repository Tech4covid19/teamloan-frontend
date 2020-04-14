import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsListFilterService } from 'src/app/components/posts-list/posts-list-filter.service';
import { PostsListModule } from 'src/app/components/posts-list/posts-list.module';
import { MaterialModule } from 'src/app/material/material.module';
import { PostsListScreenComponent } from 'src/app/screens/posts-list-screen/components/posts-list-screen.component';
import { PostsListScreenRoutingModule } from 'src/app/screens/posts-list-screen/posts-list-screen.routing.module';

@NgModule({
    declarations: [PostsListScreenComponent],
    imports: [CommonModule, PostsListScreenRoutingModule, MaterialModule, PostsListModule],
    providers: [PostsListFilterService]
})
export class PostsListScreenModule {}
