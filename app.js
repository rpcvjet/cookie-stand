'use strict';
var table = document.getElementById('salestable');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Cookielocation(locactionName, minCustPerHour, maxCustPerHour, avgCookiesperCust){
  this.locactionName = locactionName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesperCust = avgCookiesperCust;
  this.randCustomersPerHour = [],
  this.totalCookiesPerCust
   = [],
  this.totalDailyCookiesSales = 0;

  var table = document.getElementById('salestable');

  this.calcRandCustomerPerHour = function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
  };

  this.calcAvgCookiesPerHour = function () {
    this.calcRandCustomerPerHour();
    for (var i = 0; i < hours.length; i++) {

      this.totalCookiesPerCust
      .push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesperCust));
      this.totalDailyCookiesSales += this.totalCookiesPerCust
      [i];
    };
  };

  this.render = function () {
    var storesTr = document.createElement('tr');

    var headerCell = document.createElement('td');
    headerCell.textContent = this.locactionName;
    storesTr.appendChild(headerCell);


    console.log('we are in the rendor method');

    table.appendChild(storesTr);
    this.calcAvgCookiesPerHour();

    for (var i = 0; i < hours.length; i++) {
      var hourlyDataCells = document.createElement('td');
      hourlyDataCells.textContent = this.totalCookiesPerCust
      [i];
      storesTr.appendChild(hourlyDataCells);
    }
    var lastcolumnTotals = document.createElement('td');
    lastcolumnTotals.textContent = this.totalDailyCookiesSales;
    storesTr.appendChild(lastcolumnTotals);
  };

  stores.push(this);
};
var stores = [];

var firstandPike = new Cookielocation('First and Pike', 23,65, 6.3);
var SeaTac = new Cookielocation('SeaTac', 3, 24, 1.2);
var seattleCenter = new Cookielocation('Seattle Center', 11, 38, 3.7);
var capitalHill = new Cookielocation('Capital Hill', 20, 38, 2.3);
var alki = new Cookielocation('Alki', 2, 16, 4.6);

  //defining actions

function makeHeaderRow() {
  var elementRow = document.createElement('tr');

  var headerCell = document.createElement('th');
  headerCell.textContent = 'Locations';
  elementRow.appendChild(headerCell);

  for (var i = 0; i < hours.length; i++) {
    var headerCell = document.createElement('th');
    headerCell.textContent = hours[i];
    elementRow.appendChild(headerCell);
  }
  var headerCell = document.createElement('td');
  headerCell.textContent = 'Totals';
  elementRow.appendChild(headerCell);

// attaching it to the document
  table.appendChild(elementRow);
}
// execute the header code
makeHeaderRow();
//execute the render code in a loop fashion
for (var i = 0; i < stores.length; i++) {
  stores[i].render();
}
