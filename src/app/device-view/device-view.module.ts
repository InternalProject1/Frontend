import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobilesListComponent } from './mobiles-list/mobiles-list.component';



@NgModule({
  declarations: [
    MobilesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MobilesListComponent]
})
export class DeviceViewModule { }
