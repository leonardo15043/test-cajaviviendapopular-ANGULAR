import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-action-user',
  templateUrl: './action-user.component.html',
  styleUrls: ['./action-user.component.scss']
})
export class ActionUserComponent implements OnInit {

  public form:FormGroup;

  constructor(
    private _userService:UserService,
    public router:Router
  ) { 
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      status: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  saveUser(){
      this._userService.addUser(this.form.value).subscribe((user)=>{
        this.router.navigate(['/users']);
      })
  }

}
