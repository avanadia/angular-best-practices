import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent }  from './app.component';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from './core/core.module';
import { CatalogModule } from './catalog/catalog.module';
import { UserModule } from './users/user.module';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    CatalogModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
