import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserListService } from 'src/app/shared/services/user-list.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit, OnDestroy{
  actualPage:number = 1;
  observerList: Array<Subscription> = [];
  userList: Array<any> = []; 
  constructor(private _userListService: UserListService) { }

  ngOnInit(): void {
    const userListSubscription = this._userListService.getAllUsers(1).subscribe(res=>{
      this.userList = res;
    });
    this.observerList.push(userListSubscription);
  }
  ngOnDestroy(): void{
    this.observerList.forEach(observer=>{
      observer.unsubscribe();
    });
  }
  giveMore(page:number): void{
    this.actualPage = page;
    const userListSubscription = this._userListService.getAllUsers(page).subscribe(res=>{
      this.userList = res;
    });
    this.observerList.push(userListSubscription);
  }

}
