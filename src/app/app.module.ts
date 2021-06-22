import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StarshipDetailComponent } from './pages/starship-detail/starship-detail.component';
import { StarshipsComponent } from './pages/starships/starships.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './pages/main/main.component';
import { StarshipsService } from './services/starships.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'; //infinite scroll



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StarshipDetailComponent,
    StarshipsComponent,
    NavComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
