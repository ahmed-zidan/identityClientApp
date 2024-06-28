import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserInfoDto } from '../models/user';
import { UserService } from '../services/user.service';

export const authorizeGuard: CanActivateFn = (route, state) => {
  let taost = inject(ToastrService);
  let router = inject(Router);
  let userService = inject(UserService);

  let token = userService.getCurrentSavedUser();
  if(token != undefined){
    return true;
  }else{
    taost.warning("please login first");
    router.navigate(['/Login'],{queryParams:{returnUrl:state.url}});
    return false;
  }
};
