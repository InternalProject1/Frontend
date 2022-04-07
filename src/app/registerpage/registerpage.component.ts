import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user-model';
import { FormRegisterService } from '../form-register.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  
  constructor(private _service:FormRegisterService) { }
  

  User=new UserModel("","","","","","");

  

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.User);
    this._service.enroll(this.User).subscribe(data=> console.log("Success",data));

  }

  


  

}
