import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LentaComponent } from './lenta.component';

describe('LentaComponent', () => {
  let component: LentaComponent;
  let fixture: ComponentFixture<LentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
