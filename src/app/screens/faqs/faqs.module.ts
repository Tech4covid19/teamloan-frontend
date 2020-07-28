import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';


@NgModule({
  declarations: [FaqsComponent, ItemListComponent, FaqListComponent],
  imports: [
    CommonModule,
    FaqsRoutingModule
  ]
})
export class FaqsModule { }
