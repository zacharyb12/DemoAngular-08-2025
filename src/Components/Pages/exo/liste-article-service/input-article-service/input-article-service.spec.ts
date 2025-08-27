import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputArticleService } from './input-article-service';

describe('InputArticleService', () => {
  let component: InputArticleService;
  let fixture: ComponentFixture<InputArticleService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputArticleService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputArticleService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
