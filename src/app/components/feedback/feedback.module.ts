import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FeedbackComponent } from 'src/app/components/feedback/feedback.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
    declarations: [FeedbackComponent],
    imports: [CommonModule, MaterialModule, AngularSvgIconModule],
    exports: [FeedbackComponent]
})
export class FeedbackModule {}
