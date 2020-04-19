import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsListComponent } from 'src/app/components/posts-list/posts-list.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
    declarations: [PostsListComponent],
    imports: [CommonModule, MaterialModule],
    exports: [PostsListComponent]
})
export class PostsListModule {}
