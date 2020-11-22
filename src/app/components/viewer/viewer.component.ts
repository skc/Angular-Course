import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { AnalyzerService } from 'src/app/services/analyzer.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {
  max$:Observable<number>;
  min$:Observable<number>;
  sum$:Observable<number>; 

  constructor(private analyzer: AnalyzerService) { }

  ngOnInit(): void {
    let ab$ =  combineLatest([this.analyzer.getA(), this.analyzer.getB()]);
    this.max$ = ab$.pipe(map(([a,b]) => Math.max(a, b)));
    this.min$ = ab$.pipe(map(([a,b]) => Math.min(a, b)));
    this.sum$ = ab$.pipe(map(([a,b]) => a + b));
  }

}
