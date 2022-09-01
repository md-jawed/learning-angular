import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJsonFormComponent } from './create-json-form.component';

describe('CreateJsonFormComponent', () => {
  let component: CreateJsonFormComponent;
  let fixture: ComponentFixture<CreateJsonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJsonFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJsonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
