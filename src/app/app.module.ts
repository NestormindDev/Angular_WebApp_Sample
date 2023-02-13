import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AzureService } from 'src/services/azure.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AzureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
