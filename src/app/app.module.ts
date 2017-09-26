import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RootComponent } from '../root/root.component';
import { IndexComponent } from '../index/index.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { SignedinComponent } from '../signedin/signedin.component';
import { SignedininComponent } from '../signedinin/signedinin.component';
import { routing } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    RootComponent,
    IndexComponent,
    SigninComponent,
    SignupComponent,
    SignedinComponent,
    SignedininComponent

  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
