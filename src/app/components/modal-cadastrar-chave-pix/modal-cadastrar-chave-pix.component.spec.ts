import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastrarChavePixComponent } from './modal-cadastrar-chave-pix.component';

describe('ModalCadastrarChavePixComponent', () => {
  let component: ModalCadastrarChavePixComponent;
  let fixture: ComponentFixture<ModalCadastrarChavePixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCadastrarChavePixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCadastrarChavePixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
