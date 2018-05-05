import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  categories: any = [
    {name:'Appareils électroniques', reuse: true, image:'', description:'' },
    {name:'Pneus', reuse: false},
    {name:'Huile et peinture', reuse: false},
    {name:'Électroménagers', reuse: true},
    {name:'Métal', reuse: false},
    {name:'Bois', reuse: false},
    {name:'Ordures ménagères', reuse: false},
    {name:'Matières recyclables', reuse: false},
    {name:'Compostes', reuse: false},
    {name:'Déchets encombrants', reuse: false},
    {name:'Vêtements et accessoires', reuse: true},
    {name:'Meubles', reuse: true},
    {name:'Jouets', reuse: true},
    {name:'Articles de sport', reuse: true} ];


  constructor() { }

  getCategories () {
    return this.categories;
  }

}
