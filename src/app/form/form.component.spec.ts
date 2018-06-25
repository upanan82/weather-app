import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ApiComponent } from '../api/api.component';
import { FormsModule } from '@angular/forms';
import { AppService } from '../app.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent, ApiComponent ],
      imports: [ FormsModule, AppService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
