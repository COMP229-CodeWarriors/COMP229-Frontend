import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user.model';

// @Injectable()
// export class AuthService
// {
//   user: User;

//   constructor(private datasource: RestDataSource)
//   {
//     this.user = new User();
//   }

//   authenticate(user: User): Observable<any>
//   {
//     return this.datasource.authenticate(user);
//   }

//   storeUserData(token: any, user: User): void
//   {
//     this.datasource.storeUserData(token, user);
//   }

//   get authenticated(): boolean
//   {
//     return this.datasource.loggedIn();
//   }

//   logout(): Observable<any>
//   {
//     return this.datasource.logout();
//   }

// }
