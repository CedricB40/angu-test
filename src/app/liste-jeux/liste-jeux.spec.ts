import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeJeux } from './liste-jeux';

describe('ListeJeux', () => {
  let component: ListeJeux;
  let fixture: ComponentFixture<ListeJeux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeJeux],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeJeux);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
