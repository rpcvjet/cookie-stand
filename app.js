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

  render: function () {
    this.calcRandCustomerPerHour();
    this.calcAvgCookiesPerHour();

  //parent
    var hourlySalesUlEl = document.getElementById('seatac');

    for (var i = 0; i < hours.length; i++) {
    // creating the rows in the html

      var SeaTacLi = document.createElement('li'); //created the li/node
      SeaTacLi.textContent = hours[i] + ': ' + this.avgCookiesPerHour[i] + ' cookies' ;//display the hours and
      hourlySalesUlEl.appendChild(SeaTacLi);//attach child to parent
    }
    var sumLi = document.createElement('li');
    sumLi.textContent = 'Total' + ': ' + this.totalDailyCookiesSales + ' cookies';
    hourlySalesUlEl.appendChild(sumLi);

  }
};
SeaTac.render();

var seattleCenter = {
  locactionName: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesperCust: 3.7,
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
    var hourlySalesUlEl = document.getElementById('seattleCenter');

    for (var i = 0; i < hours.length; i++) {
    // creating the rows in the html

      var seattleCenterLi = document.createElement('li'); //created the li/node
      seattleCenterLi.textContent = hours[i] + ': ' + this.avgCookiesPerHour[i] + ' cookies' ;//display the hours and
      hourlySalesUlEl.appendChild(seattleCenterLi);//attach child to parent
    }
    var sumLi = document.createElement('li');
    sumLi.textContent = 'Total' + ': ' + this.totalDailyCookiesSales + ' cookies';
    hourlySalesUlEl.appendChild(sumLi);

  }
};
seattleCenter.render();

var capitalHill = {
  locactionName: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesperCust: 2.3,
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
    var hourlySalesUlEl = document.getElementById('capitalHill');

    for (var i = 0; i < hours.length; i++) {
    // creating the rows in the html

      var capitalH = document.createElement('li'); //created the li/node
      capitalH.textContent = hours[i] + ': ' + this.avgCookiesPerHour[i] + ' cookies';//display the hours and
      hourlySalesUlEl.appendChild(capitalH);//attach child to parent
    }
    var sumLi = document.createElement('li');
    sumLi.textContent = 'Total' + ': ' + this.totalDailyCookiesSales + ' cookies';
    hourlySalesUlEl.appendChild(sumLi);

  }
};
capitalHill.render();


var Alki = {
  locactionName: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesperCust: 4.6,
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
    var hourlySalesUlEl = document.getElementById('Alki');

    for (var i this.locactionName = locactionName;= 0; i < hours.length; i++) {
    // creating the rows in the html

      var AlkiLi = document.createElement('li'); //created the li/node
      AlkiLi.textContent = hours[i] + ': ' + this.avgCookiesPerHour[i] + ' cookies';//display the hours and
      hourlySalesUlEl.appendChild(AlkiLi);//attach child to parent
    }
    var sumLi = document.createElement('li');
    sumLi.textContent = 'Total' + ': ' + this.totalDailyCookiesSales + ' cookies';
    hourlySalesUlEl.appendChild(sumLi);

  }
};
Alki.render();

var stores = [];

function CookieLocation (locactionName, minCustPerHour, maxCustPerHour, avgCookiesperCust){
  this.locactionName = locactionName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesperCust = avgCookiesperCust;
  this.randCustomersPerHour = [];
  this.avgCookiesPerHour = [];
  this.totalDailyCookiesSales = 0,



}

// firstandPike.calcRandCustomerPerHour();
// console.log(firstandPike.randCustomersPerHour);
// firstandPike.calcAvgCookiesPerHour();
// console.log(firstandPike.avgCookiesPerHour);
