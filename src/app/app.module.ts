import { MenuService } from './services/menu.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QrMenuComponent } from './components/pages/qr-menu/qr-menu.component';
import { MenusComponent } from './components/pages/menus/menus.component';
import {MaterialModule} from "./components/modules/material/material.module";
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    QrMenuComponent,
    MenusComponent
  ],
  imports: [
    MatTooltipModule,
    MatIconModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
