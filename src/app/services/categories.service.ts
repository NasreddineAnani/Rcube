import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  categories: any = [
    {name:'Appareils électroniques'},
    {name:'Pneus'},
    {name:'Huile et peinture'},
    {name:'Électroménagers'},
    {name:'Métal'},
    {name:'Bois'},
    {name:'Ordures ménagères'},
    {name:'Matières recyclables'},
    {name:'Compostes'},
    {name:'Déchets encombrants'},
    {name:'Vêtements et accessoires'},
    {name:'Meubles'},
    {name:'Jouets'},
    {name:'Articles de sport'} ];


  constructor() { }

  getCategories () {
    return this.categories;
  }

}
