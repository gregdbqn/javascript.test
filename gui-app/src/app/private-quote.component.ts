import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-private-quote',
  templateUrl: './private-quote.component.html',
  styleUrls: ['./private-quote.component.css']
})
export class PrivateQuoteComponent implements OnInit {
  myQuote: string;
  constructor(
    private quoteService: QuoteService
    ,private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.quoteService.getPrivateQuote()
    .then(result => this.myQuote = result.quote)
  }

}
