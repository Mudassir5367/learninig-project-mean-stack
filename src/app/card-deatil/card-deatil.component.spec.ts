import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeatilComponent } from './card-deatil.component';

describe('CardDeatilComponent', () => {
  let component: CardDeatilComponent;
  let fixture: ComponentFixture<CardDeatilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDeatilComponent]
    });
    fixture = TestBed.createComponent(CardDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
