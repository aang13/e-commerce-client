import { Component, OnInit } from '@angular/core';
import {User, HttpRegisterService} from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  newUser:User =new User(null,"","","","",true);
  
  constructor(
    private httpRegisterService:HttpRegisterService
  ) { }

  ngOnInit() {
    
  }
  createUser():void{
    this.httpRegisterService.createUser(this.newUser)
    .subscribe(data=>{
      console.log(data);
      alert("User Registered successfully");
      
    })
  }

}
