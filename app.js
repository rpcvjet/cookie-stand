'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Cookielocation (locactionName, minCustPerHour, maxCustPerHour, avgCookiesperCust){
  this.locactionName = locactionName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesperCust = avgCookiesperCust;
  this.randCustomersPerHour = [],
  this.avgCookiesPerHour = [],
  this.totalDailyCookiesSales = 0;

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

  this.calcAvgCookiesPerHour();
  stores.push(this);
};


var stores = [];

var firstandPike = new Cookielocation('First and Pike', 23,65, 6.3);
