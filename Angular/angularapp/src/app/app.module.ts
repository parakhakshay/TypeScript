import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { SingerComponent } from './singer/singer.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustomDirective } from './directives/custom.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { CoreCodePaginationComponent } from './core-code-pagination/core-code-pagination.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { AssignFormComponent } from './assign-form/assign-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ChildComponent,
    Child2Component,
    NgifComponent,
    NgForComponent,
    SingerComponent,
    NgswitchComponent,
    NgstyleComponent,
    NgclassComponent,
    CustomDirective,
    PaginationComponent,
    CoreCodePaginationComponent,
    SimpleformComponent,
    AssignFormComponent,
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
