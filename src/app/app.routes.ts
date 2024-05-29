import { Routes } from '@angular/router';
import { LandingComponent } from './front-end/landing/landing.component';
import { ProductListComponent } from './front-end/product-list/product-list.component';
import { ProductComponent } from './front-end/product/product.component';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./front-end/front-end.module").then(m => m.FrontEndModule)
    },
    {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
    },
    {
        path: "admin",
        loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
    }
];
