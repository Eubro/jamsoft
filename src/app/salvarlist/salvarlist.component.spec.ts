import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarlistComponent } from './salvarlist.component';

describe('SalvarlistComponent', () => {
  let component: SalvarlistComponent;
  let fixture: ComponentFixture<SalvarlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
