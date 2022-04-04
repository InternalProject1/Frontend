import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { FormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DeviceViewModule } from './device-view/device-view.module';


@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    LoginpageComponent,
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DeviceViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
