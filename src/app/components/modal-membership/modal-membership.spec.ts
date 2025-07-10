import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMembership } from './modal-membership';

describe('ModalMembership', () => {
  let component: ModalMembership;
  let fixture: ComponentFixture<ModalMembership>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMembership]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMembership);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
