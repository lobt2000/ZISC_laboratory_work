import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgorizmComponent } from './main/code-cezar-lab-1/algorizm.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './component/menu/menu.component';
import { RotationComponent } from './main/rotation-lab-2/rotation.component';
import { DecodeCezarComponent } from './main/decode-cezar-lab-3/decode-cezar.component';
import { StenographyComponent } from './main/stenography-lab-4/stenography.component';
import { FeistelNetworkComponent } from './main/feistel-network-lab-5/feistel-network.component';
import { HillCodeComponent } from './main/hill-code-lab-6-7/hill-code.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorizmComponent,
    MenuComponent,
    RotationComponent,
    DecodeCezarComponent,
    StenographyComponent,
    FeistelNetworkComponent,
    HillCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
