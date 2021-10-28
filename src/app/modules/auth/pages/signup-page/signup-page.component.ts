import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  signupForm:FormGroup = new FormGroup({});
  errorSession: boolean = false;
  constructor(private _authService: AuthService, private _cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('',[
        Validators.email,
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12)
      ])
    });
  }
  onSubmitSignUp(): void{
    const {email, password} = this.signupForm.value;
    this._authService.createCredentials(email,password).subscribe(res=>{
      //TODO:Credenciales creadas correctamente 
      const {id,token} = res;
      this._cookie.set('token',token,1,'/');
      this.router.navigate(['/','list']);
    },err=>{
      //TODO:Fail
      this.errorSession = true;
    });
  }

}
