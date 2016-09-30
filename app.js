'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var table = document.getElementById('salestable');

var stores = [];
var firstandPike = new Cookielocation('First and Pike', 23,65, 6.3);
var SeaTac = new Cookielocation('SeaTac', 3, 24, 1.2);
var seattleCenter = new Cookielocation('Seattle Center', 11, 38, 3.7);
var capitalHill = new Cookielocation('Capital Hill', 20, 38, 2.3);
var alki = new Cookielocation('Alki', 2, 16, 4.6);

function Cookielocation(locactionName, minCustPerHour, maxCustPerHour, avgCookiesperCust){
  this.locactionName = locactionName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesperCust = avgCookiesperCust;
  this.randCustomersPerHour = [],
  this.avgCookiesPerHour = [],
  this.totalDailyCookiesSales = 0;

    var allLocations = [];

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

  this.render = function () {
    var trEl = document.createElement('tr');
    var ThEl = document.createElement('th');
    ThEl.textContent = this.locactionName;
    trEl.appendChild(ThEl);
    this.calcAvgCookiesPerHour();
    console.log('We are inside the render');
    table.appendChild(trEl);
    for (var i = 0; i < hours.length; i++) {
      var headerTd = document.createElement('td');
      headerTd.textContent = this.avgCookiesPerHour[i];
      trEl.appendChild(headerTd);
    }
    var lastcolumnTotals = document.createElement('td');
    lastcolumnTotals.textContent = this.totalDailyCookiesSales;
    trEl.appendChild(lastcolumnTotals);
  };
  stores.push(this);
}

function header () {
  var emptyTh = document.createElement('th');
  table.appendChild(emptyTh);
  for (var i = 0; i < hours.length; i++) {
    var headerTh = document.createElement('th');
    headerTh.textContent = hours[i];
    table.appendChild(headerTh);
  }
  var rowTotals = document.createElement('td');
  rowTotals.textContent = 'Totals';
  table.appendChild(rowTotals);

}
header();
for (var i = 0; i < stores.length; i++) {
  stores[i].render();
}
//  ****************************Start of Data Entry Form

//1st step. Need to attach Html to JS via tagID
var newLocationForm = document.getElementById('datacollectionform');


//2nd step. Need to have a way to get values form inputs
newLocationForm.addEventListener('submit', startTheNewFormLocationTransferProcess);

function startTheNewFormLocationTransferProcess(event) {
  event.preventDefault();
  var valueForMaxCustPerHour = event.target.elements.maxCustPerHour.value;
  var valueForMinCustPerHour = event.target.elements.minCustPerHour.value;
  var valueForLocation = event.target.elements.location.value;
  var valueforavgCookierPerCust = event.target.elements.avgCookiesperCust.value;


  var newLocation = new Cookielocation(valueForLocation, valueForMinCustPerHour, valueForMaxCustPerHour, valueforavgCookierPerCust);
  console.log(newLocation);

  // Kills the table above
  table.innerHTML = '';

  //prints the page
  header();
  for (var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}
