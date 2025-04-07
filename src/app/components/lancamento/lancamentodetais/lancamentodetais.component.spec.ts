import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentodetaisComponent } from './lancamentodetais.component';

describe('LancamentodetaisComponent', () => {
  let component: LancamentodetaisComponent;
  let fixture: ComponentFixture<LancamentodetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancamentodetaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentodetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
