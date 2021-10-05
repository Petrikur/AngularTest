import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitConverterUiComponent } from './unit-converter-ui/unit-converter-ui.component';



const routes: Routes = [
  {
    path: '', component: UnitConverterUiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


