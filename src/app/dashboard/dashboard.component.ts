import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { TechData } from '../shared/tech_data.model';
import { TechDataService } from '../shared/tech_data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [TechDataService],
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  top: TechData[] = []; //API Data Storage Variable
  keys = [];  //API Data Object's Keys storage variable
  values = [];  //API Data Object's Values storage variable
  barchart;  //Bar Chart
  doughnut: any; //Pie Chart

  constructor(private tech_data: TechDataService) {}

  ngOnInit() {
    this.tech_data.getResponse().subscribe((data) => {
      this.top = data['top'];
      data['top'].forEach((element) => {
        this.keys.push(element.name);
        this.values.push(element.popularity);
      });  // API Data Storage

      // Bar Chart
      this.barchart = new Chart('bar', {
        type: 'bar',
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Combo Bar and line Chart',
          },
        },
        data: {
          labels: this.keys,
          datasets: [
            {
              type: 'line',
              label: 'Bar',
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
              data: this.values,
              fill: true,
            },
            {
              type: 'bar',
              label: 'Line',
              data: this.values,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
              fill: false,
            },
          ],
        },
      });

      // Doughnut Chart
      this.doughnut = new Chart('doughnut', {
        type: 'doughnut',
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Doughnut Chart',
          },
          legend: {
            position: 'top',
          },
          animation: {
            animateScale: true,
            animateRotate: true,
          },
        },
        data: {
          datasets: [
            {
              data: this.values,
              backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
              label: 'Dataset 1',
            },
          ],
          labels: this.keys,
        },
      });
    });
  }
}
