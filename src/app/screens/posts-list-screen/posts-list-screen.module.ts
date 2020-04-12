import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { PostsListScreenComponent } from 'src/app/screens/posts-list-screen/components/posts-list-screen.component';
import { PostsListScreenRoutingModule } from 'src/app/screens/posts-list-screen/posts-list-screen.routing.module';

@NgModule({
    declarations: [PostsListScreenComponent],
    imports: [CommonModule, PostsListScreenRoutingModule, MaterialModule]
})
export class PostsListScreenModule {}
