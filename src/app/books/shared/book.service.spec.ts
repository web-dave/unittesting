import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { async, inject, TestBed } from "@angular/core/testing";

import { BookService } from './book.service';

const booksStub = [
  {
    title: "Design Patterns",
    subtitle: "Elements of Reusable Object-Oriented Software",
    isbn: "978-0-20163-361-0",
    abstract:
      "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.",
    numPages: 395,
    author: "Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides",
    publisher: {
      name: "Addison-Wesley",
      url: "http://www.addison-wesley.de/"
    }
  },
  {
    title: "REST und HTTPS",
    subtitle: "Entwicklung und Integration nach dem Architekturstil des Web",
    isbn: "978-3-86490-120-1",
    abstract:
      "Das Buch bietet eine theoretisch fundierte, vor allem aber praxistaugliche Anleitung zum professionellen Einsatz von RESTful HTTP. Es beschreibt den Architekturstil REST (Representational State Transfer) und seine Umsetzung im Rahmen der Protokolle des World Wide Web (HTTP, URIs und andere).",
    numPages: 330,
    author: "Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf",
    publisher: {
      name: "dpunkt.verlag",
      url: "http://dpunkt.de/"
    },
    id: "978-3-86490-120-1"
  },
  {
    title: "Eloquent JavaScript",
    subtitle: "A Modern Introduction to Programming",
    isbn: "978-1-59327-584-6",
    abstract:
      "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    numPages: 472,
    author: "Marijn Haverbeke",
    publisher: {
      name: "No Starch Press",
      url: "https://www.nostarch.com/"
    }
  }
];

const bookMock = booksStub[0];

describe("BookService", () => {
  beforeEach(() => {
    // setup @ngModule for testing
    TestBed.configureTestingModule({
      providers: [BookService],
      imports: [HttpClientTestingModule]
    });
  });

  // check after each test there is no pending(open) request
  afterEach(inject(
    [HttpTestingController],
    (backend: HttpTestingController) => {
      backend.verify();
    }
  ));

  it("should be created", inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  it("should return all books", inject(
    [BookService, HttpTestingController],
    (service: BookService, backend: HttpTestingController) => {
      // call service method and test IN the subscription. no need to use async anymore!!
      service.getBooks().subscribe(books => {
        expect(false).toBeTruthy();
      });

      // Wait for the call and response with mockdata  `.flush()`
      backend
        .expectOne("http://localhost:4730/books/")
        .flush(booksStub, { status: 200, statusText: "Ok" });
    }
  ));

  it("should return one specific book", inject(
    [BookService, HttpTestingController],
    (service: BookService, backend: HttpTestingController) => {
      
        expect(false).toBeTruthy();
    }
  ));

  it("should update a book", inject(
    [BookService, HttpTestingController],
    (service: BookService, backend: HttpTestingController) => {
        expect(false).toBeTruthy();
    }
  ));

  it("should create a new book", inject(
    [BookService, HttpTestingController],
    (service: BookService, backend: HttpTestingController) => {
      expect(false).toBeTruthy();
    }
  ));
});