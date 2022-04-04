import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginpageComponent } from './loginpage/loginpage.component';

import { RegisterpageComponent } from './registerpage/registerpage.component';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full' },
  {path:'login',component:LoginpageComponent},
  {path:'Register',component:RegisterpageComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
