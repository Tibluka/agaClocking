import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { User } from 'src/app/models/graphics';
import { GraphicsService } from 'src/app/services/graphics.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  barChartOptions: ChartOptions = {
    showLines: false,
    aspectRatio: 1,
    responsive: true
  }

  get barChartLabels() {
    return [''];
  }

  barChartType: ChartType = 'bar';

  barChartLegend = true;

  get barChartData(): Array<ChartDataSets> {
    return this.graphicsService.charts;
  };

  constructor(private graphicsService: GraphicsService) {
    this.graphicsService.listUsers();
  }

  ngOnInit(): void { }

}
