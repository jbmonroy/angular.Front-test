import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainMenu:{
    accessLink: Array<any>,
    closeSession: Array<any>
  } = {accessLink: [], closeSession: []}; 

  constructor(private _cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.accessLink = [
      {
        name: 'Lista',
        route: '/list'
      },
      {
        name: 'Avatars',
        route:'/avatars'
      },
      {
        name: 'Colors',
        route:'/colors'
      }
    ];
    this.mainMenu.closeSession = [
      {
        name: 'Cerrar sesión',
        click: ()=>{
          this._cookie.delete('token');
          this.router.navigate(['/','auth']);
        }
      }
    ];
  }


}
