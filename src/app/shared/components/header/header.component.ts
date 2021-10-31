import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('asMainNav')mainNav!: ElementRef;
  mainMenu:{
    accessLink: Array<any>,
    closeSession: Array<any>
  } = {accessLink: [], closeSession: []}; 
  closeMenu: boolean = true;
  desktopMenu:boolean = true;

  constructor(private _cookie: CookieService, private router: Router, 
    private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.mainMenu.accessLink = [
      {
        name: 'Lista',
        route: ['/','list']
      },
      {
        name: 'Avatars',
        route:['/','avatars']
      },
      {
        name: 'Colors',
        route:['/','colors']
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

  closeOpenMenu():void {
    const menu = this.mainNav.nativeElement;
    if(!this.closeMenu){
      this.renderer2.setStyle(menu,'width','0');
    }else{
      this.renderer2.setStyle(menu,'width','45%');
    }
    this.closeMenu = this.closeMenu?false : true;
  }
  toGo(route:Array<any>): void{
    this.closeOpenMenu();
    this.router.navigate(route);
  }


}
