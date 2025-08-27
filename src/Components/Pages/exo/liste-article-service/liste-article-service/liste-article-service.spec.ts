import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArticleService } from './liste-article-service';

describe('ListeArticleService', () => {
  let component: ListeArticleService;
  let fixture: ComponentFixture<ListeArticleService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeArticleService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeArticleService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
