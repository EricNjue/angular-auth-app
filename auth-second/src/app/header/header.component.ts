import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn = false;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.userIsLoggedIn.subscribe( (response: boolean) => {
      this.loggedIn = response;
    });
  }

}
