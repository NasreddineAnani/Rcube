import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SearchCategoriesService } from '../services/search-categories.service';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  items: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private itemsService: ItemsService,
    private categoriesService: SearchCategoriesService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    let categories = this.route.snapshot.queryParams["categories"];
    this.itemsService.getItemsByCategorie(categories).then(res => {
      for(let item of res['items']) {
      }
      this.items = res['items'];
      console.log(this.items);
    })

  }


}
