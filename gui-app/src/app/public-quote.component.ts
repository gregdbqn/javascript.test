import { Component, OnInit } from '@angular/core';
// import { AuthService } from './auth.service';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-public-quote',
  templateUrl: './public-quote.component.html',
  styleUrls: ['./public-quote.component.css']
})
export class PublicQuoteComponent implements OnInit {

  myQuote: string;
  constructor(
    private quoteService: QuoteService
    // ,private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.quoteService.getPublicQuote()
    .then(result => this.myQuote = result.quote)
  }

}
