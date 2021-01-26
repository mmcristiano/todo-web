import * as firebase from 'firebase';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.afAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }

}
