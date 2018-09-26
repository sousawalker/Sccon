import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepSearchComponent } from './cep-search.component';

describe('CepSearchComponent', () => {
  let component: CepSearchComponent;
  let fixture: ComponentFixture<CepSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
