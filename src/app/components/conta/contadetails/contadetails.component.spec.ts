import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadetailsComponent } from './contadetails.component';

describe('ContadetailsComponent', () => {
  let component: ContadetailsComponent;
  let fixture: ComponentFixture<ContadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
