import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  let taost = inject(ToastrService);
  return next(req).pipe(
    catchError((error:any)=>{
      if(error){
        console.log("error interceptor works");
        console.log(error)
        if(error.status === 404){
          taost.error(error.error.message , "error");
         }if(error.status === 500){
          taost.error(error.error.message , "error");
         }if(error.status === 500){
          taost.error(error.error.message , "error");
         }if(error.status === 405){
          taost.error("Internal error" , "error");
         }else{
          taost.error(error.message , "error");
        }
      }
      return throwError(error);
    })
  )
};
