import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  lat: any;
  long: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  register(lastname, firstname, address, phoneNumber, email, password, passwordConfirmation) {
    this.authService.register(email, password).then(res => {
      let user = this.authService.currentUser();
      user.updateProfile({
        displayName: lastname + ' ' + firstname,
        photoURL: ""
      }).then(res => {
        this.usersService.postUser( {
          lastname: lastname,
          firstname: firstname,
          address: address,
          phoneNumber: phoneNumber,
          email: email,
          coord:  {long: this.long, lat: this.lat}
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
  public onChange(address) {
    this.long = address.geometry.location.lng();
    this.lat = address.geometry.location.lat();
  }

}
