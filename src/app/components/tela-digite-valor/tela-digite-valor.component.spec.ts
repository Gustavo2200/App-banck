import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDigiteValorComponent } from './tela-digite-valor.component';

describe('TelaDigiteValorComponent', () => {
  let component: TelaDigiteValorComponent;
  let fixture: ComponentFixture<TelaDigiteValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaDigiteValorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaDigiteValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
