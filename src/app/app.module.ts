import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './views/introduction/introduction.component';
import { HtmlComponent } from './views/html/html.component';
import { ImportComponent } from './views/import/import.component';
import { ConstructorComponent } from './views/constructor/constructor.component';
import { DomDeclarationComponent } from './views/dom-declaration/dom-declaration.component';
import { FunctionLoaderComponent } from './views/function-loader/function-loader.component';
import { CreateChildComponent } from './views/create-child/create-child.component';
import { CallLoaderFunctionComponent } from './views/call-loader-function/call-loader-function.component';
import { ParentCodeComponent } from './views/parent-code/parent-code.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    HtmlComponent,
    ImportComponent,
    ConstructorComponent,
    DomDeclarationComponent,
    FunctionLoaderComponent,
    CreateChildComponent,
    CallLoaderFunctionComponent,
    ParentCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
