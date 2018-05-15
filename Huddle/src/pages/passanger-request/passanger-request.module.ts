import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PassangerRequestPage } from './passanger-request';

@NgModule({
  declarations: [
    PassangerRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PassangerRequestPage),
  ],
})
export class PassangerRequestPageModule {}
