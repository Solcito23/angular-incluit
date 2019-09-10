import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username : string = "";
  public password : string = "";
  constructor(private localService : LocalStorageService, private route:Router) { }

  ngOnInit() {
  }

  ingresar(){
    let fulluser = btoa(this.username.concat(this.password));
    this.localService.create('user', fulluser);
    this.route.navigateByUrl('/home');
    // alert("Ingresar");
  }

}
