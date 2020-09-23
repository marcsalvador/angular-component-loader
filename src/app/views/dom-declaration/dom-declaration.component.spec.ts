import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomDeclarationComponent } from './dom-declaration.component';

describe('DomDeclarationComponent', () => {
  let component: DomDeclarationComponent;
  let fixture: ComponentFixture<DomDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomDeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
