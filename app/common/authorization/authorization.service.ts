import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthorizationService {
  
  constructor ( private localStorageService: LocalStorageService ) { }
   
 setAuthInfo(info:any) {
    this.localStorageService.add('authInfo', info);
    var currentDate = new Date();
    var k = this.localStorageService.get('authInfo')
    this.localStorageService.get('authInfo')['expires_in'] = currentDate.setSeconds(currentDate.getSeconds() +this.localStorageService.get('authInfo')['expires_in']);
   // $localStorage.authInfo['expires_in'] = currentDate.setSeconds(currentDate.getSeconds() + $localStorage.authInfo['expires_in']);
  }

  getAuthInfo():any {
      return this.localStorageService.get('authInfo');
    }

    isLoggedIn() {
      return !!this.localStorageService.get('authInfo');
    }
} 