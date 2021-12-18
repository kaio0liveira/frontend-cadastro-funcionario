import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDepartamentoComponent } from './visualizar-departamento.component';

describe('VisualizarDepartamentoComponent', () => {
  let component: VisualizarDepartamentoComponent;
  let fixture: ComponentFixture<VisualizarDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
