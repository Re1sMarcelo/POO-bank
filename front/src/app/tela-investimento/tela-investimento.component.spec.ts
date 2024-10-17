import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInvestimentoComponent } from './tela-investimento.component';

describe('TelaInvestimentoComponent', () => {
  let component: TelaInvestimentoComponent;
  let fixture: ComponentFixture<TelaInvestimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaInvestimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaInvestimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
