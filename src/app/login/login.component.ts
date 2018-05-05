import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.authService.currentUser()){
      this.router.navigate(['dashboard']);
    }
  }

  login(email, password) {
    this.authService.login(email, password).then(() => {
      console.log('Success');
      this.router.navigate(['dashboard']);
    }).catch(err => {
      console.log(err);
    });

  }

}
