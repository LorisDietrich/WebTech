import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnallistComponent } from './personnallist.component';

describe('PersonnallistComponent', () => {
  let component: PersonnallistComponent;
  let fixture: ComponentFixture<PersonnallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnallistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
