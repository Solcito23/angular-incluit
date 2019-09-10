import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private router:Router, private localStorageService: LocalStorageService) {}
    canActivate():boolean{
        if(this.localStorageService.retrieve('user')){
          return true;
        }else{
          this.router.navigateByUrl('/login');
          return false;
        }
      
    }
}

