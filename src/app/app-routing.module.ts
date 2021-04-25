import { QrMenuComponent } from './components/pages/qr-menu/qr-menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './components/pages/menus/menus.component';

const routes: Routes = [
  {
    path:'',component:MenusComponent
  },
  {
    path:'qr-menu/:id',component: QrMenuComponent
  },
{
  path:'qr-menu ',component: QrMenuComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
