import { NgModule } from '@angular/core';
import { EquipasMainComponent } from './equipas-main.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
    declarations: [EquipasMainComponent],
    imports: [PostsRoutingModule]
    // providers: [PostingResolver]
})
export class PostsModule {}
