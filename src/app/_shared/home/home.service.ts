import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = "../../../assets/json"

  constructor(private http: HttpClient) { }

  getHomeData() {
    // return this.http.get<any>(`${this.baseUrl}/home.json`)
    //   .toPromise()
    //   .then(res => <Image[]>res.data)
    //   .then(data => { return data; });\
      return this.http.get(this.baseUrl+"/home.json");
    }
}
