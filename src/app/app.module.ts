import { importType } from '@angular/compiler/src/output/output_ast';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth'; //khai báo khi yêu cầu phải xác thực VD: trong chức năng update
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';



import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { ItemService } from './services/item.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AddItemComponent } from './add-item/add-item.component';
//import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'add-item',
    component: AddItemComponent
  }
];

@NgModule({
  declarations: [AppComponent, MainComponent, NavbarComponent, AddItemComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase,'Project Angular'),
    AngularFirestoreModule,
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features=> dùng cho chức năng update
  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
