import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockTesting } from './mock-testing';

describe('MockTesting', () => {
  let component: MockTesting;
  let fixture: ComponentFixture<MockTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockTesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockTesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
