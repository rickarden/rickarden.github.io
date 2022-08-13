import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldlistComponent } from './oldlist.component';

describe('OldlistComponent', () => {
  let component: OldlistComponent;
  let fixture: ComponentFixture<OldlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
