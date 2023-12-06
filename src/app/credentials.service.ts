import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {
  private userInfo: any = {};
  private isChild: boolean = false;

  saveUserInfo(username: string, password: string, isParent: boolean, linkedDevice: string): void {
    this.userInfo = {
      username,
      password,
      isParent,
      linkedDevice,
    };
  }


  getUserInfo(): any {
    return this.userInfo;
  }

  isValidUser(username: string, password: string): boolean {
    return this.userInfo.username === username && this.userInfo.password === password;
  }

  setIsChild(value: boolean): void {
    this.isChild = value;
  }

  getIsChild(): boolean {
    return this.isChild;
  }

}
