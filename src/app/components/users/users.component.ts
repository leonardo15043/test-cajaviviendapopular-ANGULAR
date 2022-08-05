import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users:any = [];

  constructor(
    private _userService:UserService,
    private activatedRoute:ActivatedRoute
  ) { 
    this.activatedRoute.queryParams.subscribe( data =>{
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsersAll().subscribe((users:any)=>{
      this.users = users;
    });
  }



}
