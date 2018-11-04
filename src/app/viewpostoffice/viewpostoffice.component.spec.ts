import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpostofficeComponent } from './viewpostoffice.component';

describe('ViewpostofficeComponent', () => {
  let component: ViewpostofficeComponent;
  let fixture: ComponentFixture<ViewpostofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpostofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpostofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
