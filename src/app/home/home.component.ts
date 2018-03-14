import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any = [];
  search: boolean = false;
  searchInput: string;

  constructor( private imageService : ImageService) { }

  ngOnInit() {
    this.imageService.getImages('cars').then( images => {
      this.images = images;
    }).catch( err => {

    });
  }

  onUploadHandler(e) {
    console.log(e)
  }

  onChangeHandler(e) {
    console.log(e)
  }

}
