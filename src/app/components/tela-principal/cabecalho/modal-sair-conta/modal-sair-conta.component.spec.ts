import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSairContaComponent } from './modal-sair-conta.component';

describe('ModalSairContaComponent', () => {
  let component: ModalSairContaComponent;
  let fixture: ComponentFixture<ModalSairContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalSairContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSairContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
