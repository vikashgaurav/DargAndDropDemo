import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '../polyfills';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GridsterModule } from 'angular-gridster2';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component,
    LayoutItemDirective
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    LayoutComponent],
  entryComponents: [
    Example1Component,
    Example2Component
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
