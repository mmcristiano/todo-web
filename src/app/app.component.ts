import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  /**
   *
   */
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {
  }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(data => {
      if (data) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
      console.log(data);
    });

    //this.afAuth.idToken.subscribe(token => sessionStorage.setItem('token', token));
    // TODO: Remover antes de publicar em produção
    this.afAuth.idToken.subscribe(token => console.log(token));

  }
}
