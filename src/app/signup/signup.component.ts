import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  register(email, username, password, passwordConfirmation) {
    this.authService.register(email, password).then(res => {
      let user = this.authService.currentUser();
      user.updateProfile({
        displayName: username,
        photoURL: ""
      }).then(res => {
        this.usersService.postUser( {
          displayName: username,
          email: email,
          notification: true,
          premium: false
        }).then(res => {
          console.log(res);
          this.router.navigate(['dashboard']);
        }).catch( err => {
          console.log(err);
        })
      }).catch(err => {
        console.log(err);
      });
      console.log(res);
    }).catch( err => {
      console.log(err);
    })
  }

}
