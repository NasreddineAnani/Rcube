import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  categories: any = [
    {name:'Appareils électroniques', reuse: true, image:'https://images.pexels.com/photos/825262/pexels-photo-825262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:'' },
    {name:'Pneus', reuse: false, image:'https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Huile et peinture', reuse: false, image:'', description:''},
    {name:'Électroménagers', reuse: true, image:'', description:''},
    {name:'Métal', reuse: false, image:'', description:''},
    {name:'Bois', reuse: false, image:'', description:''},
    {name:'Ordures ménagères', reuse: false, image:'', description:''},
    {name:'Matières recyclables', reuse: false, image:'', description:''},
    {name:'Compostes', reuse: false, image:'', description:''},
    {name:'Déchets encombrants', reuse: false, image:'', description:''},
    {name:'Vêtements et accessoires', reuse: true, image:'', description:''},
    {name:'Meubles', reuse: true, image:'', description:''},
    {name:'Jouets', reuse: true, image:'', description:''},
    {name:'Articles de sport', reuse: true, image:'', description:''} ];


  constructor() { }

  getCategories () {
    return this.categories;
  }

}
