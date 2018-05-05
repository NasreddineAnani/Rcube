import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { LinksService } from '../services/links.service';
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
              private linksService: LinksService,
              private usersService: UsersService) { }

  ngOnInit() {
    this.empty = false;
    this.loading = true;

    this.route.params.subscribe(params => {
      this.username = params['id'];

      this.usersService.getUserByUsername(this.username).then( res => {
        if((<any>res).length == 0){
          this.loading = false;
          this.empty = true;
        } else {
          this.user = (<any>res)[0];
        }
      }).catch(err => {
        console.log(err);
      });
    });
  }

}
