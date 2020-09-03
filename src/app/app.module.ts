import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DescComponent } from './desc/desc.component';
import { Data } from '../data.service'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DescComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    Data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
