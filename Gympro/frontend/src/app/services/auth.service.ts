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
    // Check if there is a token in localStorage
    return !!localStorage.getItem('token');
  }
}
