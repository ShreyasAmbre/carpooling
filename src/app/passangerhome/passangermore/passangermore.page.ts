import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, CategoryScale, BarController, BarElement,
  DoughnutController, ArcElement , LegendOptions, Legend, LegendElement, LegendItem, registerables} from 'chart.js';
import * as moment from 'moment';
import { MainserviceService } from 'src/app/services/mainservice.service';

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

  upcomingRidesLength = 0
  historyRidesLength = 0
  completedRidesLength = 0

  constructor(private http:HttpClient, private service: MainserviceService) { }

  ngOnInit() {
    this.createChart()
    this.getAllRides()
  }

  getAllRides(){
    let data = {
      passanger_id : this.service.userData["fid"]
    }
    this.http.post("http://127.0.0.1:5000/getpassangerbookedrides", data).subscribe(res => {
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
      console.log("PASSANGER ALL RIDES RESPONSE ==>", allRides)
      console.log("PASSANGER UPCOMING UPCOMING RIDES ==>", upcomingRides, this.upcomingRidesLength)
      console.log("PASSANGER UPCOMING HISTORY RIDES ==>", historyRides, this.historyRidesLength)
      console.log("PASSANGER UPCOMING COMPLETED RIDES ==>", completedRides, this.historyRidesLength)
      this.createChart()
    })
  }


  createChart(){
    var ctx = document.getElementById('myChart')as HTMLCanvasElement;
    var ctxDonut = document.getElementById('myDonut')as HTMLCanvasElement;
    Chart.register(LinearScale, CategoryScale, BarController, BarController,  BarElement,
                    DoughnutController, ArcElement);

    this.myDonut = new Chart(ctxDonut, {
      type: "doughnut",
      data: {
        // labels: ["Upcoming Rides", "Completed Rides", "History Rides",],
        labels: [this.upcomingRidesLength, this.completedRidesLength, this.historyRidesLength],
        datasets: [
          {
            label: "# of Votes",
            data: [2,2,2],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(124, 252, 0, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            hoverBackgroundColor: ["#36A2EB", "#00FF00", "#ff6384"]
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
