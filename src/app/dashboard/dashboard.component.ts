import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute, Router } from "@angular/router";
import { CategoriesService } from '../services/categories.service';
import { PickupService } from '../services/pickup.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  alert:string;
  categories: any[] = [];
  currentCategorie: any;
  selection: any;
  step: any;
  pickUpSize: any;
  lat: number = 45.5577848;
  lng: number = -73.8714164;
  imageItem: any;
  categorie: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private itemsService: ItemsService,
    private categoriesService: CategoriesService,
    private pickupService: PickupService
  ) { }

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
    this.step = 0;
  }

  getNextStep(categorie) {
    this.currentCategorie = categorie;
    this.step = this.currentCategorie.nextStep;
  }

  bookPickUp(bookingDate) {
    this.pickupService.postPickup({
      date: bookingDate,
      size: this.pickUpSize
    });

    this.alert = "La ville a été notifié, la collecte aura lieu le " + bookingDate + " !";
    setTimeout(() => {
      this.alert = "";
    }, 4000);
    this.step = 0;
  }

  giveObject() {

    this.step = 0;
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageItem = reader.result.split(',')[1];
      };
    }
  }

  submitItems(titleItem, descriptionItem) {
    this.itemsService.postItems({
      title: titleItem,
      description: descriptionItem,
      image: this.imageItem,
      categories: this.categorie
    });
    this.alert = "Votre objet a été ajouté au objets a donner !";
    setTimeout(() => {
      this.alert = "";
    }, 4000);
    this.step = 0;
  }

  onUpload(info) {
    this.imageItem = info.originalUrl;
  }
}
