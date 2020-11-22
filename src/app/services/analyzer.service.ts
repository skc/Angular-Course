import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerService {
  private a$ = new BehaviorSubject<number>(0);
  private b$ = new BehaviorSubject<number>(0);

  constructor() { }

  getA(): Observable<number> {
    return this.a$.asObservable()
  }

  getB(): Observable<number> {
    return this.b$.asObservable()
  }

  async setA(val: number): Promise<void> {
    this.a$.next(val);
  }

  async setB(val: number): Promise<void> {
    this.b$.next(val);
  }
}
