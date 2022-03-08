import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { Chart, LinearScale, CategoryScale, BarController, BarElement,
        DoughnutController, ArcElement , LegendOptions, Legend, LegendElement, LegendItem, registerables} from 'chart.js';
import {HttpClient} from "@angular/common/http";
import * as moment from 'moment';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {
  // donutChart = new Chart(donutChartsOptions)

  doughnutChart: any;
  myChart:any;
  myDonut:any;
  opt:any;

  upcomingRidesLength = 0
  historyRidesLength = 0
  completedRidesLength = 0

  constructor(private http:HttpClient, private service: MainserviceService) { }

  ngOnInit() {
    this.getAllRides()
  }

  getAllRides(){
    let data = {
      fid : this.service.userData["fid"]
    }
    this.http.post("http://127.0.0.1:5000/getdriverrides", data).subscribe(res => {
      let allRides = JSON.parse('[' + res + ']')[0]
      let todaysDate = moment().format('YYYY MM DD')
      let upcomingRides = []
      let historyRides = []
      let completedRides = []
      for (let index = 0; index < allRides.length; index++) {
        let dateOfRide = allRides[index]["date_of_ride"]
        if((moment(dateOfRide).isSame(moment(), 'day') || moment(dateOfRide).isAfter(todaysDate)) && 
            allRides[index]["ride_status"] !== "cancelled"){
          upcomingRides.push(allRides[index])
        }
        if(moment(dateOfRide).isBefore(todaysDate) || allRides[index]["ride_status"] !== "pending"){
          
          allRides[index]["ride_status"] === "pending" ? completedRides.push(allRides[index]) : historyRides.push(allRides[index])
          
        }
        this.upcomingRidesLength = upcomingRides.length
        this.historyRidesLength = historyRides.length
        this.completedRidesLength = completedRides.length
      }
      // console.log("ALL RIDES RESPONSE ==>", allRides)
      // console.log("UPCOMING UPCOMING RIDES ==>", upcomingRides)
      // console.log("UPCOMING HISTORY RIDES ==>", historyRides)
      // console.log("UPCOMING COMPLETED RIDES ==>", completedRides)
      this.createChart()
    })
  }

  createChart(){
    var ctx = document.getElementById('myChart')as HTMLCanvasElement;
    var ctxDonut = document.getElementById('myDonut')as HTMLCanvasElement;
    Chart.register(LinearScale, CategoryScale, BarController, BarController,  BarElement,
                    DoughnutController, ArcElement);
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Bad', 'Better', 'Good', 'Great', 'Superb'],
          datasets: [{
              label: 'Rides Status Count',
              data: [1, 1, 3, 4.5, 5],
              backgroundColor: [
                "rgba(235,163,54, 0.2)"   ,
                "rgba(235, 54, 54, 0.2)"  ,
                "rgba(255, 251, 0, 0.2)"  ,
                "rgba(135, 255, 99, 0.2)" ,
                "rgba(115, 99, 255, 0.2)" ,
              ],
              borderColor: [
                "rgba(235,163,54, 1)"   ,
                "rgba(235, 54, 54, 1)"  ,
                "rgba(255, 251, 0, 1)"  ,
                "rgba(135, 255, 99, 1)" ,
                "rgba(115, 99, 255, 1)" ,
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
        labels: ["Cancelled", "Completed", "UpComing"],
        datasets: [
          {
            label: "# of Votes",
            data: [this.historyRidesLength, this.completedRidesLength, this.upcomingRidesLength],
            backgroundColor: [
              "rgba(235,163,54, 0.2)"   ,
              "rgba(135, 255, 99, 0.2)" ,
              "rgba(115, 99, 255, 0.2)" ,
            ],
            hoverBackgroundColor: ["#eb3636", "#87ff63", "#7363ff",]
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


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.upcomingRidesLength = 0
      this.historyRidesLength = 0
      this.completedRidesLength = 0
      this.getAllRides()
      event.target.complete();
    }, 2000);
  }






  
}
