import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTedComponent } from './tela-ted.component';

describe('TelaTedComponent', () => {
  let component: TelaTedComponent;
  let fixture: ComponentFixture<TelaTedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaTedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaTedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
