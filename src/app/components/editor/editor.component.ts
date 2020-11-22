import { Component, OnInit } from '@angular/core';
import { AnalyzerService } from 'src/app/services/analyzer.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private analyzer: AnalyzerService) { }

  ngOnInit(): void {
  }

  async inputA(val: string) {
    await this.analyzer.setA(Number(val));
  }

  async inputB(val: string) {
    await this.analyzer.setB(Number(val));
  }

}
