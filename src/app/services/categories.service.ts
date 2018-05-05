import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  categories: any = [
    {name:'Appareils électroniques', reuse: true, image:'https://images.pexels.com/photos/825262/pexels-photo-825262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:'' },
    {name:'Pneus', reuse: false, image:'https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Huile et peinture', reuse: false, image:'https://images.pexels.com/photos/6368/art-wall-brush-painting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Électroménagers', reuse: true, image:'https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Métal', reuse: false, image:'https://images.pexels.com/photos/46167/iron-rods-reinforcing-bars-rods-steel-bars-46167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Bois', reuse: false, image:'https://images.pexels.com/photos/128639/pexels-photo-128639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Ordures ménagères', reuse: false, image:'', description:''},
    {name:'Matières recyclables', reuse: false, image:'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
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
