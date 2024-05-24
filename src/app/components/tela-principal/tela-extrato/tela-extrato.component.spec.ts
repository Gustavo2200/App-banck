import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaExtratoComponent } from './tela-extrato.component';

describe('TelaExtratoComponent', () => {
  let component: TelaExtratoComponent;
  let fixture: ComponentFixture<TelaExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaExtratoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
