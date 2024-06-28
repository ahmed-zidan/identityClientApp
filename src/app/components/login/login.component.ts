import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { FormsModule } from '@angular/forms';
import { LoginDto, UserInfoDto } from '../../models/user';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule , FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  user:LoginDto={email:'',password:''};
  returnUrl:string = "";
  constructor(private userService:UserService , private toast:ToastrService , private router:Router,private activeRoute : ActivatedRoute){

  }
  ngOnInit(): void {
    this.userService.deleteUserFromLocal();
    this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || "/Home";
  }
  Login(){
    this.userService.login(this.user).subscribe({
      next:res=>{
        let user = res as UserInfoDto;
        this.toast.success('You have successfully logined','Success');
        this.userService.saveUserInLocalStorage(user);
        this.router.navigate([this.returnUrl]);
      },error:err=>{
        console.log(err);
        this.toast.error(err.error.message,'Error');
        if(err.error.errors){
          this.toast.error(err.error.errors,'Error');
        }
      }
    })
  }
}
