import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCodeComponent } from './parent-code.component';

describe('ParentCodeComponent', () => {
  let component: ParentCodeComponent;
  let fixture: ComponentFixture<ParentCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
