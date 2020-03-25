import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    // children: [
    //   {
    //     path: "",
    //     redirectTo: "order"
    //   },
    //   {
    //     path: "order",
    //     loadChildren: () =>
    //       import("./order/order.module").then(mod => mod.OrderModule)
    //   },
    //   {
    //     path: "service",
    //     loadChildren: () =>
    //       import("./service/service.module").then(mod => mod.ServiceModule)
    //   },
    //   {
    //     path: "user",
    //     loadChildren: () =>
    //       import("./user/user.module").then(mod => mod.UserModule)
    //   }
    // ]
  }
];

export const CoreRoutes = RouterModule.forChild(routes);
