'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstandPike = {
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesperCust: 6.3,
  randCustomersPerHour: [],
  avgCookiesPerHour: [],


  calcRandCustomerPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.randCustomersPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);

    }
  },
  calcAvgCookiesPerHour: function () {
    for (var i = 0; i < hours.length; i++) {
      this.avgCookiesPerHour[i] = Math.round(this.randCustomersPerHour[i] * this.avgCookiesperCust);

    }
  },

  render: function () {
    this.calcRandCustomerPerHour();
    this.calcAvgCookiesPerHour();

    var wrapperEl = document.getElementById('wrapper'); //takes in all the shops onto one page, no need to edit each coffee shop name.
    //parent
    var hourlySalesUlEl = document.createElement('ul');
    wrapperEl.appendChild(hourlySalesUlEl);


    for (var i = 0; i < hours.length; i++) {
      // creating the rows in the html

      var firstandPikeList = document.createElement('li'); //created the li/node
      firstandPikeList.textContent = hours[i];//display the hours and ...
      hourlySalesUlEl.appendChild(firstandPikeList);//attach child to parent

      var column2 = document.createElement('ul');
      column2.textContent = this.calcRandCustomerPerHour[i];
      hourlySalesUlEl.appendChild(column2);
    }


  }
};
firstandPike.render();


// firstandPike.calcRandCustomerPerHour();
// console.log(firstandPike.randCustomersPerHour);
// firstandPike.calcAvgCookiesPerHour();
// console.log(firstandPike.avgCookiesPerHour);
