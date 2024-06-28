import { HttpInterceptorFn } from '@angular/common/http';
import {  inject } from '@angular/core';
import { UserService } from './user.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  let userService = inject(UserService);
  let token =  userService.getCurrentSavedUser();
  if(token != undefined){
  let tokenReq = req.clone({
    setHeaders:{
      Authorization:'bearer '+token.token
    }
  })
  return next(tokenReq);
  }else{
    return next(req);
  }
};
