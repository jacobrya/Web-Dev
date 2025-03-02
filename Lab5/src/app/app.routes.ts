import { Routes,RouterModule } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';


export const routes: Routes = [
    {path:'',component: ProductListComponent},
    {path: 'product-detail', component: ProductDetailComponent}
];



export class AppRoutingModule {}