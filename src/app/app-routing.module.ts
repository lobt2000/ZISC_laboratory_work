import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorizmComponent } from './main/algorizm/algorizm.component';
import { DecodeCezarComponent } from './main/decode-cezar/decode-cezar.component';
import { RotationComponent } from './main/rotation/rotation.component';
import { StenographyComponent } from './main/stenography/stenography.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cezar' },
  { path: 'cezar', component: AlgorizmComponent },
  { path: 'rotation', component: RotationComponent },
  { path: 'decodeCezar', component: DecodeCezarComponent },
  { path: 'stenography', component: StenographyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
