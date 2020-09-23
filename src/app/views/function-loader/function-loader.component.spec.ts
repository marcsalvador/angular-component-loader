import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionLoaderComponent } from './function-loader.component';

describe('FunctionLoaderComponent', () => {
  let component: FunctionLoaderComponent;
  let fixture: ComponentFixture<FunctionLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
