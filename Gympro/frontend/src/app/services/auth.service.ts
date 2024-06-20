import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout() {
    // Clear user data, tokens, etc.
    localStorage.clear();
    // Additional logout logic here if needed
  }

  isLoggedIn(): boolean {
    // Check if there is a token in localStorage and if it's valid
    return !!localStorage.getItem('token');
  }
}
