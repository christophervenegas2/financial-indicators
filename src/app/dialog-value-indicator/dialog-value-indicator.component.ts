import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-dialog-value-indicator',
  templateUrl: './dialog-value-indicator.component.html',
  styleUrls: ['./dialog-value-indicator.component.sass']
})
export class DialogValueIndicatorComponent implements OnInit {

  dataSource;
  title: string;
  displayedColumns: string[] = ['fecha', 'valor'];

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.title = this.data.type.replace('_', ' ');
    this.dataSource = this.data.element.sort((a, b) => moment(b.fecha).diff(moment(a.fecha)));
    this.dataSource = this.dataSource.slice(0, 10);

  }

}
