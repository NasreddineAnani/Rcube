import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  categories: any = [
    {name:'Électroniques', nextStep: 2,reuse: true, image:'https://images.pexels.com/photos/825262/pexels-photo-825262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:'' },
    {name:'Pneus', nextStep: 2, reuse: false, image:'https://images.pexels.com/photos/244553/pexels-photo-244553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Huile et peinture', nextStep: 2, reuse: false, image:'https://images.pexels.com/photos/6368/art-wall-brush-painting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Électroménagers', nextStep: 2, reuse: true, image:'https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Métal', nextStep: 2, reuse: false, image:'https://images.pexels.com/photos/46167/iron-rods-reinforcing-bars-rods-steel-bars-46167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Bois', nextStep: 2, reuse: false, image:'https://images.pexels.com/photos/128639/pexels-photo-128639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Ordures ménagères', nextStep: 4, reuse: false, image:'https://images.pexels.com/photos/128421/pexels-photo-128421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Matières recyclables', nextStep: 4, reuse: false, image:'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Compostes', nextStep: 4, reuse: false, image:'https://scontent.fyhu1-1.fna.fbcdn.net/v/t1.15752-9/31967941_1770921046261337_3898621361668489216_n.png?_nc_cat=0&_nc_eui2=v1%3AAeHZhSdT6v0e8wFKsJhSnQWI_6ep6pyCCkd-uctOWKSYstN-Aqcc52ucgZGP4nPJ5pi1UbAPVWocdxEABvg5ZPtqCjuXQ_Uxo1LSZsyJiBZRhA&oh=c5a02d42cb10e1b47030d4c30963523a&oe=5B5B9213', description:''},
    {name:'Déchets encombrants', nextStep: 3, reuse: false, image:'https://images.pexels.com/photos/279652/pexels-photo-279652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Vêtements', nextStep: 5, reuse: true, image:'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description:''},
    {name:'Meubles', nextStep: 5, reuse: true, image:'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description:''},
    {name:'Jouets', nextStep: 5, reuse: true, image:'https://images.pexels.com/photos/681118/pexels-photo-681118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Articles de sport', nextStep: 5, reuse: true, image:'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''} ];


  constructor() { }

  getCategories () {
    return this.categories;
  }

}
