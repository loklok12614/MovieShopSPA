import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCastComponent } from './add-cast.component';

describe('AddCastComponent', () => {
  let component: AddCastComponent;
  let fixture: ComponentFixture<AddCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
