import { Component } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { FormsModule } from '@angular/forms';
import { RegisterDto } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialModule,FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
user:RegisterDto = {email:'',firstName:'',lastName:'',password:''};
constructor(private userService:UserService,private toast:ToastrService,private router:Router){

}
submit(){
  this.userService.register(this.user).subscribe({
    next:res=>{
      this.toast.success('You have successfully Registered','Success');
      this.router.navigate(['/login']);
    },error:err=>{
      console.log(err);
      this.toast.error(err.error.message,'Error');
    }
  })
}

}
