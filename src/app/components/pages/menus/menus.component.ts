import { MenuService } from './../../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  category: any;
  menus: any;
  product: any;
  image: any;
  status: boolean = false;

  constructor(private service: MenuService,
              private router: Router,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.status = true;
    this.service.getMenus().then((data) => {
      this.menus = data;
      this.status = false;
    });
  }

  getProducts(p: any){
    this.router.navigate(['/qr-menu', p.id]);
  }

  getMenuBackground(image: any) {
    let img = 'https://' + image;
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  getCategoryBackground(image: any) {
    let img = 'https://' + image;
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

}
