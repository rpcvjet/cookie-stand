'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstandPike = {
  locactionName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesperCust: 6.3,
  randCustomersPerHour: [],
  avgCookiesPerHour: [],
  totalDailyCookiesSales:0,


  calcRandCustomerPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);

    }
  },
  calcAvgCookiesPerHour: function () {
    this.calcRandCustomerPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.avgCookiesPerHour.push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesperCust));
      this.totalDailyCookiesSales += this.avgCookiesPerHour[i];
    }
  },

  render: function () {
    this.calcRandCustomerPerHour();
    this.calcAvgCookiesPerHour();

    //parent
    var hourlySalesUlEl = document.getElementById('list');

    for (var i = 0; i < hours.length; i++) {
      // creating the rows in the html

      var firstandpikeLi = document.createElement('li'); //created the li/node
      firstandpikeLi.textContent = hours[i] + ': ' + this.avgCookiesPerHour[i] + ' cookies' ;//display the hours and
      hourlySalesUlEl.appendChild(firstandpikeLi);//attach child to parent
    }
    var sumLi = document.createElement('li');
    sumLi.textContent = 'Total' + ': ' + this.totalDailyCookiesSales + ' cookies';
    hourlySalesUlEl.appendChild(sumLi);

  }
};
firstandPike.render();

var SeaTac = {
locactionName: 'SeaTac',
minCustPerHour: 3,
maxCustPerHour: 24,
avgCookiesperCust: 1.2,
randCustomersPerHour: [],
avgCookiesPerHour: [],
totalDailyCookiesSales:0,

calcRandCustomerPerHour: function () {
  for (var i = 0; i < hours.length; i++) {
    this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);

  }
},
calcAvgCookiesPerHour: function () {
  this.calcRandCustomerPerHour();
  for (var i = 0; i < hours.length; i++) {
    this.avgCookiesPerHour.push(Math.ceil(this.randCustomersPerHour[i] * this.avgCookiesperCust));
    this.totalDailyCookiesSales += this.avgCookiesPerHour[i];
  }
},

render SeaTac: function () {
  this.calcRandCustomerPerHour();
  this.calcAvgCookiesPerHour();

  //parent
  var hourlySalesUlEl = document.getElementById('list');

  for (var i = 0; i < hours.length; i++) {
    // creating the rows in the html

    var firstandpikeLi = document.createElement('li'); //created the li/node
    firstandpikeLi.textContent = hours[i] + ': ' + this.avgCookiesPerHour[i] + ' cookies' ;//display the hours and
    hourlySalesUlEl.appendChild(firstandpikeLi);//attach child to parent
  }
  var sumLi = document.createElement('li');
  sumLi.textContent = 'Total' + ': ' + this.totalDailyCookiesSales + ' cookies';
  hourlySalesUlEl.appendChild(sumLi);

}
};
firstandPike.render();

// firstandPike.calcRandCustomerPerHour();
// console.log(firstandPike.randCustomersPerHour);
// firstandPike.calcAvgCookiesPerHour();
// console.log(firstandPike.avgCookiesPerHour);
