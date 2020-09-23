import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChildComponent } from './create-child.component';

describe('CreateChildComponent', () => {
  let component: CreateChildComponent;
  let fixture: ComponentFixture<CreateChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
