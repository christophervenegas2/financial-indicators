import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ChartDataSets, ChartOptions} from 'chart.js';
import * as moment from 'moment';
import {Color, BaseChartDirective, Label} from 'ng2-charts';
import { ChartService } from './service/chart.service';
import { DialogValueIndicatorComponent } from '../dialog-value-indicator/dialog-value-indicator.component';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.sass']
})
export class ChartsComponent implements OnInit {

  @Input() typeData;

  private backgroundColor = 'rgba(17, 135, 238, .5)';
  private borderColor = 'rgba(17, 135, 238, 1)';
  private hoverBackgroundColor = 'rgba(17, 135, 238, .8)';
  private hoverBorderColor = 'rgba(17, 135, 238, 1)';

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation }) = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          gridLines: {color: '#6E6E6E', display: true, drawOnChartArea: false},
          position: 'bottom',
        }
      ],
      yAxes: [
        {
          gridLines: {color: '#6E6E6E', display: true, drawOnChartArea: false},
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // red
      backgroundColor: this.backgroundColor,
      borderColor: this.borderColor,
      pointBackgroundColor: this.backgroundColor,
      pointBorderColor: this.borderColor,
      pointHoverBackgroundColor: this.hoverBackgroundColor,
      pointHoverBorderColor: this.hoverBorderColor
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line' as const;
  // public lineChartPlugins = [pluginAnnotations];
  tableData;
  chartValue;
  data;

  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;

  constructor( private ChartService: ChartService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getData(this.typeData);
    this.ChartService.getProgressChartData().subscribe((res) => {
      this.data = res;
    })
  }

  private getData(typeData: string) {
    const responses:any = [];
    this.ChartService.getChartValue(typeData).subscribe((res) => {
      this.tableData = res.serie
      this.chartValue = res.serie.sort((a, b) => moment(a.fecha).diff(moment(b.fecha)));
      responses.push(this.chartValue.slice(1).slice(-5));
      this.lineChartData[0].fill = false;
      this.lineChartData[0].label = typeData.toUpperCase();
      this.chartValue = this.chartValue.slice(1).slice(-5);
      this.chartValue.forEach(valor => this.lineChartData[0].data?.push(Number(String(valor.valor))));
      responses.forEach((response: { fecha: string, valor }[]) => {
          this.lineChartLabels = [];
          response.forEach(resPeriod => {
            this.lineChartLabels.push( moment(resPeriod.fecha).format("DD-MM-yyyy") );
          });
        });
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogValueIndicatorComponent, {
      maxWidth: '500px',
      data: {
        element: this.tableData,
        type: this.typeData
      },
      panelClass: 'dialog-responsive',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
