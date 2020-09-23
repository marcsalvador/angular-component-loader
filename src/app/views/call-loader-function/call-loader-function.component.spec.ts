import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLoaderFunctionComponent } from './call-loader-function.component';

describe('CallLoaderFunctionComponent', () => {
  let component: CallLoaderFunctionComponent;
  let fixture: ComponentFixture<CallLoaderFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallLoaderFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLoaderFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
