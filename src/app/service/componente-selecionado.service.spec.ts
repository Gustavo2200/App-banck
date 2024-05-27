import { TestBed } from '@angular/core/testing';

import { ComponenteSelecionadoService } from './componente-selecionado.service';

describe('ComponenteSelecionadoService', () => {
  let service: ComponenteSelecionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponenteSelecionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
