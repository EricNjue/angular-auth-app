import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';

const domainUrl = environment.apiUrl;

@Injectable()
export class AuthenticationService {
  userIsLoggedIn = new EventEmitter<boolean>();
  public token: string;

  constructor(private http: Http) {
      // set token if saved in local storage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login( username: string, password: string): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(domainUrl + '/api/auth/login', JSON.stringify({ username: username, password: password }), { headers })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().auth_token;
        if (token) {
          // set token property
          this.token = token;
         this.userIsLoggedIn.emit(true);
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          console.log('Error');
          console.log(JSON.parse(response.json()));
          return false;
        }
      })
      .catch(this.handleError);
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    this.userIsLoggedIn.emit(false);
    localStorage.removeItem('currentUser');
  }

  private handleError (error: Response | any) {
    // console.error('ApiService::handleError', error);
    const data = JSON.parse(error._body);
    return Observable.throw(error);
  }
}
