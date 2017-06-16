import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuoteService {

private publicQuoteUrl = 'http://localhost:1337/api/random-quote';
private privateQuoteUrl = 'http://localhost:1337/api/protected/random-quote';

constructor(private http: Http, private authHttp: AuthHttp) { }

getPublicQuote()
{
  return this.http
    .get(this.publicQuoteUrl)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
}

getPrivateQuote()
{
    return this.authHttp
    .get(this.privateQuoteUrl)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
}


private handleError(error: any): Promise<any> {
  console.error('An error occured', error);
  return Promise.reject(error.message || error)
}

}
