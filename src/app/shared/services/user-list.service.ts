import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) {}
  /**
   * 
   * @returns Retorna todos los usuarios
   */
  getAllUsers(page:number):Observable<any>{
    return this.http.get(`${this.URL}/users?page=${page}`).pipe(
      map(({data}:any)=>{
        return data      
      })
    );
  }
}
