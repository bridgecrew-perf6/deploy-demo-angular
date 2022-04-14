import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { TamsuComponent } from './tamsu/tamsu.component';
import { LamdepComponent } from './lamdep/lamdep.component';
import { KinhdoanhComponent } from './kinhdoanh/kinhdoanh.component';
import { GiaitriComponent } from './giaitri/giaitri.component';
import { ThoisuComponent } from './thoisu/thoisu.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''}, // Đây là set default routes
  {path: "Trang chủ", component: TrangchuComponent},
  {path: "Thời sự", component: ThoisuComponent},
  {path: "Giải trí", component: GiaitriComponent},
  {path: "Kinh doanh", component: KinhdoanhComponent},
  {path: "Làm đẹp", component: LamdepComponent},
  {path: "Tâm sự", component: TamsuComponent},
  {path: "Đăng nhập", component: DangnhapComponent},
  {path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
