import { MenuService } from './../../../services/menu.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-qr-menu',
  templateUrl: './qr-menu.component.html',
  styleUrls: ['./qr-menu.component.scss']
})
export class QrMenuComponent implements OnInit {
  category: any;
  status: boolean = false;
  section?: string;
  selectedCategoryProducts: any;
  selectedCategoryId: number = 0;

  constructor(private menuService: MenuService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((data) => {
      const id = data.get('id');
      this.menuService.getCategory(id).then((data) => {

        this.category = data;
        this.selectedCategoryProducts = this.category[0].products;
        this.selectedCategoryId = this.category[0].id;

      })
      this.status = true;
    });
  }

//  dynamicUrl(imageUrl: string) {
//   var img = document.getElementById('image')!;
//    img.src = imageUrl;
//   }
  getMenuBackground(image: any) {
    let img = 'https://' + image;
    return this.sanitizer.bypassSecurityTrustStyle(`url(${img})`);
  }

  selectCategory(category: any){
    this.selectedCategoryProducts = category.products;
    this.selectedCategoryId = category.id;

  }



  // goTo(c: any){
  //   var section = c.toString();
  //   $window.document.getElementById(section).scrollIntoView({behavior:"smooth"});
  // }

}
