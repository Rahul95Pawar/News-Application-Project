import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewapiService {

  constructor(private http: HttpClient) { }
  newshead = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=17fe9ca34fbc4ec6b10a41d70a6c58cc';
  tcHeadline(): Observable<any> {
    return this.http.get(this.newshead)
  }


  business = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17fe9ca34fbc4ec6b10a41d70a6c58cc';
  getData(): Observable<any> {
    return this.http.get(this.business)
  }

  Technology = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=17fe9ca34fbc4ec6b10a41d70a6c58cc';
  Tech(): Observable<any> {
    return this.http.get(this.Technology)
  }

  entertainment = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=17fe9ca34fbc4ec6b10a41d70a6c58cc';
  ent(): Observable<any> {
    return this.http.get(this.entertainment)
  }

  health = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=17fe9ca34fbc4ec6b10a41d70a6c58cc';
  hea(): Observable<any> {
    return this.http.get(this.health)
  }

  Science = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=17fe9ca34fbc4ec6b10a41d70a6c58cc';
  Sci(): Observable<any> {
    return this.http.get(this.Science)
  }

  Sports = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=17fe9ca34fbc4ec6b10a41d70a6c58cc';
  Spo(): Observable<any> {
    return this.http.get(this.Sports)
  }

}
