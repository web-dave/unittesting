import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BookListComponent } from './book-list.component';
import { BookPreviewComponent } from '../shared/mocks/mock.component';
import { MockBooksService } from '../shared/mocks/mock.book.service';
import { BookService } from '../shared/book.service';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let view: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: BookService,
          useClass: MockBooksService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    view = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 books', () => {
    expect(component.books.length).toBe(3);

    expect(view.querySelectorAll('app-book-preview').length).toBe(3);
  });
});
