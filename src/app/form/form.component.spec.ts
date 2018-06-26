import { async, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { FormComponent } from './form.component';
import { WeatherComponent } from '../weather/weather.component';
import { AppService } from '../app.service';

class MockAppService extends AppService {
  getApiData(city: string): Observable<any> {
    return of(city as string);
  }
}

describe('FormComponent', () => {
  let component: FormComponent;
  let service: MockAppService;
  const http: HttpClient = null;
  const route: ActivatedRoute = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormComponent,
        WeatherComponent
      ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockAppService(http);
    component = new FormComponent(service, route);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
