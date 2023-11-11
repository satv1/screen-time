import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private sharedService: UserService, private router: Router) {}



  logout() {
    this.sharedService.setIsParent(false);
    this.sharedService.setIsChild(false);
    this.router.navigate(['login']);
  }


}
