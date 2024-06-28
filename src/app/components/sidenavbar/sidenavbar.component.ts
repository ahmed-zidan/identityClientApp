import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../MaterialModule';
import { Menu } from '../../models/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [MaterialModule,RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})
export class SidenavbarComponent implements OnInit {
  menus:Menu[] = [];
  username:string = "";
  ngOnInit(): void {
    this.menus = [{name:"Home",icon:"Home"},{name:"aboutUs",icon:"about"},{name:"Privacy",icon:"Privacy"}]
  }
  constructor(private toast:ToastrService , private userService:UserService){

  }

  getUserInfo(){
    let userInfo = this.userService.getCurrentSavedUser();
    if(userInfo && userInfo.username){
      this.username = userInfo.username;
    }
    return userInfo;
  }
}
