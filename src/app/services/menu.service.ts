import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  BASE_URL = 'https://service.mutlugunlerfirini.com.tr/api/';

  constructor(private http: HttpClient) { }

  getCategory(id: any){
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('celil@gmail.com' + ':' + '1980'),
      Accept: 'application/json'
    });
    return this.http.get<any>(this.BASE_URL + 'categories/getallwithproducts?menuId=' + id, {headers}).toPromise();
  }

  getMenus(){
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('celil@gmail.com' + ':' + '1980'),
      Accept: 'application/json'
    });
    return this.http.get<any>(this.BASE_URL + 'menus/getall', {headers}).toPromise();
  }

}
