import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    ThumbnailComponent
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      backgroundColor: "#000",
      titleFontSize: "12",
      radius: 20,
      maxPercent: 100,
      units: "%",
      outerStrokeWidth: 5,
      showSubtitle: false,
      showInnerStroke: false,
      startFromZero: false,
      innerStrokeColor: "#FFFFFF",
      titleColor: "#FFFFFF",
      unitsColor: "#FFFFFF",
      titleFontWeight: "500",
    })
  ],
  exports: [
    ThumbnailComponent
  ]
})
export class ComponentsModule { }
