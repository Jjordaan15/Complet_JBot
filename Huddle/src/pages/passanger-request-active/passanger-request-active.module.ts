import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassangerRequestActivePage } from './passanger-request-active';

@NgModule({
  declarations: [
    PassangerRequestActivePage,
  ],
  imports: [
    IonicPageModule.forChild(PassangerRequestActivePage),
  ],
})
export class PassangerRequestActivePageModule {}
