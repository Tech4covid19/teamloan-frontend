import { NgModule } from '@angular/core';
import { PostingResolver } from 'src/app/resolvers/posting.resolver';
import { EquipasMainComponent } from './equipas-main.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
    declarations: [EquipasMainComponent],
    imports: [PostsRoutingModule]
    // providers: [PostingResolver]
})
export class PostsModule {}
