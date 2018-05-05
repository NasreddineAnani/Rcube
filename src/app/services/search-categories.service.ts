import { Injectable } from '@angular/core';

@Injectable()
export class SearchCategoriesService {

  searchCategories: any = [
    {name:'Électroménagers', reuse: true, image:'https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Vêtements et accessoires', reuse: true, image:'https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description:''},
    {name:'Meubles', reuse: true, image:'https://images.pexels.com/photos/545012/pexels-photo-545012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350', description:''},
    {name:'Jouets', reuse: true, image:'https://images.pexels.com/photos/681118/pexels-photo-681118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:''},
    {name:'Articles de sport', reuse: true, image:'https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', description:''},
    {name:'Autres', reuse: true, image:'https://images.pexels.com/photos/825262/pexels-photo-825262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', description:'' }];

  constructor() { }

  getSearchCategories () {
    return this.searchCategories;
  }

}
