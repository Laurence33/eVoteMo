import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/timeout';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server: string = 'http://localhost/eVoteMo/backend/api/';

  constructor(
    public http: HttpClient
  )
  {}

  postData(body, file) {
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8'
    });

    let options = {
      headers : headers
    };

    return this.http.post(this.server + file, JSON.stringify(body), options)
    // .timeout(59000)
    // .map(res => res);
  }

  register(data) {
    let headers = new HttpHeaders({
      "Content-Type" : "application/json; charset=UTF-8"
    });
    let options = {
      headers: headers
    }
    return this.http.post('voter/register.php', data, options);
  }

  login(body, file) {
    let headers = new HttpHeaders({
      "Content-Type" : "application/json; charset=UTF-8"
    });
    let options = {
      headers: headers
    }
    return this.http.post(this.server + file, JSON.stringify(body), options);
  }

  getRegistrations(){
    let headers = new HttpHeaders({
      "Content-Type" : "application/json; charset=UTF-8"
    });
    let options = {
      headers: headers
    }
    return this.http.get(this.server + 'getRegistrations.php', options);
  }

  getCandidatesCount() {
    let headers = new HttpHeaders({
      "Content-Type" : "application/json; charset=UTF-8"
    });
    let options = {
      headers: headers
    }
    return this.http.get(this.server + 'getCandidatesCount.php', options);
  }

  addCandidate(body) {
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8'
    });

    let options = {
      headers : headers
    };

    return this.http.post(this.server+"addCandidate.php", JSON.stringify(body), options);
  }

  approveRegistration(data){
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8'
    });

    let options = {
      headers : headers
    };

    return this.http.post(this.server+"approveRegistration.php", JSON.stringify(data), options);
  }

  getCandidates() {
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8'
    });

    let options = {
      headers : headers
    };

    let data = {};

    return this.http.post(this.server+"getCandidates.php", JSON.stringify(data), options);
  }

  getCandidatesOfPosition(data) {
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json; charset=UTF-8'
    });

    let options = {
      headers : headers
    };

    return this.http.post(this.server+"getCandidatesOfPosition.php", JSON.stringify(data), options);
  }
}
