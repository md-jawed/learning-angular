import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONFormComponent } from './jsonform.component';

describe('JSONFormComponent', () => {
  let component: JSONFormComponent;
  let fixture: ComponentFixture<JSONFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JSONFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSONFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
