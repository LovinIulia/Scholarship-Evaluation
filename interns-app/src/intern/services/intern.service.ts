import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from '../interfaces/intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  readonly baseUrl= "https://localhost:44357";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }
  
  getInterns():Observable<Intern[]> {
    console.log('url called: '+ this.baseUrl+'/interns');
    return this.httpClient.get<Intern[]>(this.baseUrl+'/interns', this.httpOptions);
  }
  
  getIntern(internId: string):Observable<Intern> {
    return this.httpClient.get<Intern>(this.baseUrl+'/interns/intern/' + internId, this.httpOptions);
  }
  
  addIntern(intern: Intern) {
    return this.httpClient.post(this.baseUrl+'/interns', intern, this.httpOptions);
  }

  editIntern(intern: Intern) {
    return this.httpClient.put(this.baseUrl+'/interns', intern, this.httpOptions);
  }

  deleteIntern(id: string) {
    return this.httpClient.delete(this.baseUrl+'/interns/intern/' + id);
  }
}
