import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateQuoteComponent } from './private-quote.component';

describe('PrivateQuoteComponent', () => {
  let component: PrivateQuoteComponent;
  let fixture: ComponentFixture<PrivateQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
