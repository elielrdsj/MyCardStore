import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userform:FormGroup
  Login: any;
  Password: any;
  constructor(private fb:FormBuilder) {
    this.userform=this.fb.group({
      Login:'',
      Password:''
    })
  }
  setValue() {
    this.Login=this.userform.get("Login")?.value;
    this.Password=this.userform.get("Password")?.value;
  }
  Auth() {
    this.setValue();
    console.log(this.Login);
  }

}
