import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute, Router } from "@angular/router";
import { CategoriesService } from '../services/categories.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories: any[] = [];
  currentCategorie: any;
  selection: any;
  step: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private itemsService: ItemsService,
    private categoriesService: CategoriesService

  ) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.step = 0;

  }

  getNextStep(categorie) {
    if(!categorie.reuse) {
      this.currentCategorie = categorie;
      this.step = 2;
    }
  }
}
