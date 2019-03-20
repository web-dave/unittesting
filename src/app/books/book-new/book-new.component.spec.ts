import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { MockBooksService } from './../shared/mocks/mock.book.service';
import { BookService } from '../shared/book.service';

import { BookNewComponent } from './book-new.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;
  let compiled;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookNewComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [{ provide: BookService, useClass: MockBooksService }]
    })
      .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  }));

  // Tip: This tests based on reactive-forms, take a look at the BookNew Class (form attribute)
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when initialized', () => {
    expect(true).toBeFalsy();
  });

  it('should require title otherwise mark form as invalid', () => {
    expect(true).toBeFalsy();
  });

  it('should be valid if all values are valid', () => {
    expect(true).toBeFalsy();
  });

  it('should call BookData.createBook on submit', inject([BookService], (service: BookService) => {
    expect(true).toBeFalsy();
  }));
});
