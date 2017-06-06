import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicQuoteComponent } from './public-quote.component';

describe('PublicQuoteComponent', () => {
  let component: PublicQuoteComponent;
  let fixture: ComponentFixture<PublicQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
