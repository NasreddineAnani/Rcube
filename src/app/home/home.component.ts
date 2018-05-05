import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { ItemsService } from '../services/items.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empty: boolean;
  loading: boolean = false;
  username: any;
  user: any;
  links: any = [];
  url: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private itemsService: ItemsService,
              private usersService: UsersService,
              private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.currentUser()){
      this.router.navigate(['dashboard']);
    }
    this.empty = false;
    this.loading = true;

  }

}
