'use strict';
var table = document.getElementById('salestable');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Cookielocation (locactionName, minCustPerHour, maxCustPerHour, avgCookiesperCust){
  this.locactionName = locactionName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesperCust = avgCookiesperCust;
  this.randCustomersPerHour = [],
  this.avgCookiesPerHour = [],
  this.totalDailyCookiesSales = 0;

  var allLocations = [];

  var firstandPike = new Cookielocation('First and Pike', 23,65, 6.3);
  var SeaTac = new Cookielocation('SeaTac', 3, 24, 1.2);
  var seattleCenter = new Cookielocation('Seattle Center', 11, 38, 3.7);
  var capitalHill = new Cookielocation('Capital Hill', 20, 38, 2.3);
  var alki = new Cookielocation('Alki', 2, 16, 4.6);

  var stores = [];

//defining actions


  this.calcRandCustomerPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };

  this.calcAvgCookiesPerHour = function () {
    this.calcRandCustomerPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.avgCookiesPerHour.push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesperCust));
      this.totalDailyCookiesSales += this.avgCookiesPerHour[i];
    };
  };


  function makeHeaderRow() {
    var elementRow = document.createElement('tr');

    var headerCell = document.createElement('th')
    headerCell.textContent = 'Locations';
    elementRow.appendChild(headerCell);

    for (var i = 0; i < hours.length; i++) {
      var headerCell = document.createElement('th')
      headerCell.textContent = hours[i];
      elementRow.appendChild(headerCell);
    }
    var headerCell = document.createElement('td')
    headerCell.textContent = 'Totals'
    elementRow.appendChild(headerCell);
  }
  makeHeaderRow();
}




//
//   this.render = function () {
//     var trEl = document.createElement('tr');
//     var ThEl = document.createElement('th');
//     ThEl.textContent = this.locactionName;
//     trEl.appendChild(ThEl);
//     this.calcAvgCookiesPerHour();
//     console.log('We are inside the render');
//     table.appendChild(trEl);
//     for (var i = 0; i < hours.length; i++) {
//       var headerTd = document.createElement('td');
//       headerTd.textContent = this.avgCookiesPerHour[i];
//       trEl.appendChild(headerTd);
//     }
//   };
//   stores.push(this);
// }





// header();
// for (var i = 0; i < stores.length; i++) {
//   stores[i].render();
// }
