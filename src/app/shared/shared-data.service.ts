import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  blogDetails = new BehaviorSubject<any>(null);
  currentBlogDetails = this.blogDetails.asObservable();


  constructor() { }
}
