import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CallLoaderFunctionComponent } from './views/call-loader-function/call-loader-function.component';
import { ConstructorComponent } from './views/constructor/constructor.component';
import { CreateChildComponent } from './views/create-child/create-child.component';
import { DomDeclarationComponent } from './views/dom-declaration/dom-declaration.component';
import { FunctionLoaderComponent } from './views/function-loader/function-loader.component';

import { HtmlComponent } from './views/html/html.component';
import { ImportComponent } from './views/import/import.component';
import { IntroductionComponent } from './views/introduction/introduction.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
  ) {
  }

  @ViewChild('container', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.loadIntroduction();
  }


  loadIntroduction(): void {
    if (this.viewContainerRef != null) { this.viewContainerRef.clear(); }
    const factory = this.componentFactoryResolver.resolveComponentFactory(IntroductionComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  loadHtmlView(): void {
    if (this.viewContainerRef != null) { this.viewContainerRef.clear(); }
    const factory = this.componentFactoryResolver.resolveComponentFactory(HtmlComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  loadImport(): void {
    if (this.viewContainerRef != null) { this.viewContainerRef.clear(); }
    const factory = this.componentFactoryResolver.resolveComponentFactory(ImportComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  loadConstructor(): void {
    if (this.viewContainerRef != null) { this.viewContainerRef.clear(); }
    const factory = this.componentFactoryResolver.resolveComponentFactory(ConstructorComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  loadDomDeclaration(): void {
    if (this.viewContainerRef != null) { this.viewContainerRef.clear(); }
    const factory = this.componentFactoryResolver.resolveComponentFactory(DomDeclarationComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  loadFunctionLoader(): void {
    if (this.viewContainerRef != null) { this.viewContainerRef.clear(); }
    const factory = this.componentFactoryResolver.resolveComponentFactory(FunctionLoaderComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  loadCreateChild(): void {
    if (this.viewContainerRef != null) { this.viewContainerRef.clear(); }
    const factory = this.componentFactoryResolver.resolveComponentFactory(CreateChildComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }

  loadCallLoader(): void {
    if (this.viewContainerRef != null) { this.viewContainerRef.clear(); }
    const factory = this.componentFactoryResolver.resolveComponentFactory(CallLoaderFunctionComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
