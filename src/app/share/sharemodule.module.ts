import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';

@NgModule({
  declarations: [BtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
})
export class SharemoduleModule { }
