import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { StarshipDetailComponent } from './pages/starship-detail/starship-detail.component';
import { StarshipsComponent } from './pages/starships/starships.component';

const routes: Routes = [

  //canActivate: [AmILoggedGuard]
  //pathMatch: 'full',
 {
  path: '',
  component: MainComponent,
  pathMatch: 'full'
},
{
  path: 'starships',
  component: StarshipsComponent
},
{
  path: 'starships-detail/:name',
  component: StarshipDetailComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
//{ //if path isn't anything listed on this list ^ it will take you to this link
   //path: "**",
   //redirectTo: "MainComponent",
   //pathMatch: "full"
 //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
