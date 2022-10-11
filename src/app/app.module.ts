import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  imports:      [ 
    BrowserModule, 
    NgxScannerQrcodeModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
