import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewpostofficeComponent } from './viewpostoffice/viewpostoffice.component';
import { PostofficeComponent } from './postoffice/postoffice.component';
import { ShipmentsComponent } from './shipments/shipments.component';

const routes: Routes = [
  {path:'',component:ViewpostofficeComponent},
  {path:'postoffice', component: PostofficeComponent},
  {path:'postoffice/:id',component:PostofficeComponent},
  {path:'shipments', component: ShipmentsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
