import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPreviewComponent } from './book-preview.component';
import { mockBooks } from '../shared/mocks/mock.book.service';
import { IBook } from '../shared/costum-types';

describe('BookPreviewComponent', () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;
  let compiled: HTMLElement;
  const book: IBook = mockBooks[0];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookPreviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show the Book Title', () => {
    expect(compiled.querySelector('li').innerText).toBe(book.title);
  });

  it('should emit the book', done => {
    component.book = book;
    fixture.detectChanges();
    expect(false).toBeTruthy();
  });
});
