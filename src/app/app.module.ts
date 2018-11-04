import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostofficeComponent } from './postoffice/postoffice.component';
import { ViewpostofficeComponent } from './viewpostoffice/viewpostoffice.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PostofficeComponent,
    ViewpostofficeComponent,
    ShipmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
