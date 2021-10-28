import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession:boolean = false;
  loginForm: FormGroup = new FormGroup({});
  constructor(private _authService: AuthService, private _cookie: CookieService
    ,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
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
  onSubmitLogin(): void{
    const {email, password} = this.loginForm.value;
    this._authService.sendCredentials(email,password).subscribe(res=>{
      //TODO:Credenciales correctas 
      const {token} = res;
      this._cookie.set('token',token,1,'/');
      this.router.navigate(['/','list']);
    },err=>{
      //TODO:Fail
      this.errorSession = true;
    });
  }

}
