import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any;
  isLogged: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.currentUser = this.authService.currentUser();
      if (this.currentUser) {
        this.isLogged = true;
      } else  {
        this.isLogged = false;
      };
    })
  }

  logout () {
    this.authService.logout().then(() => {
      this.router.navigate(['']);
    })
  }

}
