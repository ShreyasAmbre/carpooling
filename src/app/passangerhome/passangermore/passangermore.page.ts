import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, CategoryScale, BarController, BarElement,
  DoughnutController, ArcElement , LegendOptions, Legend, LegendElement, LegendItem, registerables} from 'chart.js';

@Component({
  selector: 'app-passangermore',
  templateUrl: './passangermore.page.html',
  styleUrls: ['./passangermore.page.scss'],
})
export class PassangermorePage implements OnInit {

  doughnutChart: any;
  myChart:any;
  myDonut:any;
  opt:any;

  constructor() { }

  ngOnInit() {
    var ctx = document.getElementById('myChart')as HTMLCanvasElement;
    var ctxDonut = document.getElementById('myDonut')as HTMLCanvasElement;
    Chart.register(LinearScale, CategoryScale, BarController, BarController,  BarElement,
                    DoughnutController, ArcElement);
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    });

    this.opt = [{
      ticks: {
        beginAtZero: true
      }
    }]

    this.myDonut = new Chart(ctxDonut, {
      type: "doughnut",
      data: {
        labels: ["Cancel Ride", "Success Ride", "Ratings", "Upcoming Rides", "Income"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#36eb6c", "#d363ff",]
          }
        ],
      },
      options: {
        scales: {
          // yAxes: this.opt
        },
        plugins: {
            legend: {
              display: true,
              align: 'start',
            }
        }
        
    }
      
    });
  }

}
