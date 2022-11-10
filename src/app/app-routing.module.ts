import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewoneproductComponent } from './viewoneproduct/viewoneproduct.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  { path:"register",
  component:RegisterComponent
},
{ path:"login",
  component:LoginComponent
},
{ path:"contact",
  component:ContactComponent
},
{ path:"view",
  component:ViewproductsComponent
},
{ path:"viewone/:id",
  component:ViewoneproductComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
