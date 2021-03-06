import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfmakeComponent } from 'src/app/shared/pdfmake/pdfmake.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { NominaComponent } from './nomina.component';

const routes: Routes = [
  {
    path: '', component:NominaComponent,
    children:[
      {path: 'tablas', component:TablasComponent},
      {path: '', component:PdfmakeComponent}


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule { }
