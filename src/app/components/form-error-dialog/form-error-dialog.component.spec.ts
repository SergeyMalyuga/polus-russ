import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorDialogComponent } from './form-error-dialog.component';

describe('FormErrorDialogComponent', () => {
  let component: FormErrorDialogComponent;
  let fixture: ComponentFixture<FormErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormErrorDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormErrorDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
