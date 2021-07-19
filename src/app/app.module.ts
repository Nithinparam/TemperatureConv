import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneCompoComponent } from './one-compo/one-compo.component';
import { TwoCompoComponent } from './two-compo/two-compo.component';
import { Routes, RouterModule } from '@angular/router';

const approute: Routes = [
  { path: 'one', component: OneCompoComponent },
  { path: 'two', component: TwoCompoComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(approute)],
  declarations: [
    AppComponent,
    HelloComponent,
    OneCompoComponent,
    TwoCompoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
