import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocontadetailsComponent } from './tipocontadetails.component';

describe('TipocontadetailsComponent', () => {
  let component: TipocontadetailsComponent;
  let fixture: ComponentFixture<TipocontadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipocontadetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocontadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
