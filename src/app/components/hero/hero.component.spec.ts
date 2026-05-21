import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHero } from './hero.component';

describe('HeroHero', () => {
  let component: HeroHero;
  let fixture: ComponentFixture<HeroHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroHero],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
