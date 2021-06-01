import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkletonLoaderComponent } from './skleton-loader.component';



@NgModule({
  declarations: [SkletonLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [SkletonLoaderComponent]
})
export class SkletonLoaderModule { }
