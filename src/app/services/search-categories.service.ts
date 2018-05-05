import { Injectable } from '@angular/core';

@Injectable()
export class SearchCategoriesService {

  searchCategories: any = [
    {name:'Appareils électroniques', reuse: true, image:'', description:'' },
    {name:'Électroménagers', reuse: true},
    {name:'Vêtements et accessoires', reuse: true},
    {name:'Meubles', reuse: true},
    {name:'Jouets', reuse: true},
    {name:'Articles de sport', reuse: true} ];


  constructor() { }

  getSearchCategories () {
    return this.searchCategories;
  }

}
