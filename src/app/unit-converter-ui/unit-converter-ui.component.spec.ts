import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConverterUiComponent } from './unit-converter-ui.component';

describe('UnitConverterUiComponent', () => {
  let component: UnitConverterUiComponent;
  let fixture: ComponentFixture<UnitConverterUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitConverterUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConverterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
