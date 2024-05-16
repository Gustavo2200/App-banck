import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDestinatarioPixComponent } from './modal-destinatario-pix.component';

describe('ModalDestinatarioPixComponent', () => {
  let component: ModalDestinatarioPixComponent;
  let fixture: ComponentFixture<ModalDestinatarioPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDestinatarioPixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDestinatarioPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
