import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPixComponent } from './tela-pix.component';

describe('TelaPixComponent', () => {
  let component: TelaPixComponent;
  let fixture: ComponentFixture<TelaPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaPixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
