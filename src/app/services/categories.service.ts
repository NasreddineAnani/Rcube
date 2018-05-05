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
    {name:'Vêtements et accessoires', reuse: true, image:'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description:''},
    {name:'Meubles', reuse: true, image:'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description:''},
    {name:'Jouets', reuse: true, image:'http://www.decouvrirletimbre.com/uploads/d/c/a/dca463bef773c36ae720694d92dde3ea070307f1.jpeg', description:''},
    {name:'Articles de sport', reuse: true, image:'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''} ];


  constructor() { }

  getCategories () {
    return this.categories;
  }

}
