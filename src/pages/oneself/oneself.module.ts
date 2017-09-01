import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OneselfPage } from './oneself';

@NgModule({
  declarations: [
    OneselfPage,
  ],
  imports: [
    IonicPageModule.forChild(OneselfPage),
  ],
  exports: [
    OneselfPage,
  ],
})
export class OneselfPageModule {}
