import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarfuncionarioComponent } from './listarfuncionario.component';

describe('ListarfuncionarioComponent', () => {
  let component: ListarfuncionarioComponent;
  let fixture: ComponentFixture<ListarfuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarfuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarfuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
