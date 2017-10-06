import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../Services/authentication.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';


  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset the login status...
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;

    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        console.log(result);

        if (result === true) {
          // login successful
          this.router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username and/or password is incorrect';
          this.loading = false;
        }
      }, error => {
        this.error = JSON.parse(error._body);
        this.error = this.error['Password'] || this.error['login_failure'] || this.error['Username'];
      });
  }

}
