import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorizmComponent } from './main/code-cezar-lab-1/algorizm.component';
import { DecodeCezarComponent } from './main/decode-cezar-lab-3/decode-cezar.component';
import { FeistelNetworkComponent } from './main/feistel-network-lab-5/feistel-network.component';
import { HillCodeComponent } from './main/hill-code-lab-6-7/hill-code.component';
import { RotationComponent } from './main/rotation-lab-2/rotation.component';
import { StenographyComponent } from './main/stenography-lab-4/stenography.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cezar' },
  // { path: '**', component: AlgorizmComponent },
  { path: 'cezar', component: AlgorizmComponent },
  { path: 'rotation', component: RotationComponent },
  { path: 'decodeCezar', component: DecodeCezarComponent },
  { path: 'stenography', component: StenographyComponent },
  { path: 'feistel-network', component: FeistelNetworkComponent },
  { path: 'hill-code', component: HillCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
