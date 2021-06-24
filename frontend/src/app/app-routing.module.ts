import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { CartComponent } from './shop/cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from "./category/category.component";
import { PersonnallistComponent } from "./personnallist/personnallist.component";
import { CheckoutComponent } from "./shop/checkout/checkout.component";
import { AuthGuard } from "./services/auth.guard";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'cart', component: CartComponent},
  {path: 'single-product/:id', component: SingleProductComponent},
  {path: 'category/:id', component: CategoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'personnallist', component: PersonnallistComponent},
  {path: 'checkout', canActivate: [AuthGuard], component: CheckoutComponent},
  {path: 'notFound', component: NotFoundComponent},
  {path: '', component: ShopComponent},
  {path: '*', redirectTo: 'notFound', pathMatch: 'full'},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
