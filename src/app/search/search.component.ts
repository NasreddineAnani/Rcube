import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchCategoriesService } from '../services/search-categories.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchCategories: any[] = [];
  currentCategorie: any;
  step: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private itemsService: ItemsService,
    private categoriesService: SearchCategoriesService

  ) { }

  ngOnInit() {
    this.searchCategories = this.categoriesService.getSearchCategories();
    this.step = 1;
  }

  getNextStep(searchCategories) {
    if (searchCategories.reuse) {
      this.currentCategorie = searchCategories;
      this.step = 2;
    }
  }

}
