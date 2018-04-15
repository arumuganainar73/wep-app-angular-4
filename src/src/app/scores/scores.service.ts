import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {
  
    constructor(public http: Http) {

    console.log('Hello AppProvider Provider');
  }

  apiRequest(): Observable<any> {

    console.log("Service Demo");

    let hdrs = new Headers();

   let options = new RequestOptions({ headers: hdrs });

    var url = "http://www2.rsphinx.com/static/misc/cric_scores.json";
          return this.http.get(url, options)

        .map((res) => {

          console.log('api response:', res);

          return res.json();

        })

        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    

  }

}
