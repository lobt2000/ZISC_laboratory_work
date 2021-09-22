import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgorizmComponent } from './main/algorizm/algorizm.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './component/menu/menu.component';
import { RotationComponent } from './main/rotation/rotation.component';
import { DecodeCezarComponent } from './main/decode-cezar/decode-cezar.component';
import { StenographyComponent } from './main/stenography/stenography.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorizmComponent,
    MenuComponent,
    RotationComponent,
    DecodeCezarComponent,
    StenographyComponent
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
