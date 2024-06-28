import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto, RegisterDto, UserInfoDto } from '../models/user';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {

   }

   getCurrentSavedUser(){
    let user = JSON.parse(localStorage.getItem(environment.userKey) as string) as UserInfoDto;
    return user;
   }
   saveUserInLocalStorage(user:UserInfoDto){
    localStorage.setItem(environment.userKey,JSON.stringify(user));
   }
   deleteUserFromLocal(){
    localStorage.removeItem(environment.userKey);
   }

   refreshUserToken(){
    return this.http.get(environment.baseUrl + 'Account/refreshUserToken');
   }
   login(user:LoginDto){
    return this.http.post(environment.baseUrl + 'Account/Login',user);
   }
   register(user:RegisterDto){
    return this.http.post(environment.baseUrl +'Account/Register',user);
   }
}
