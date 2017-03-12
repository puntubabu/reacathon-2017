import React, { Component } from 'react';
import singleRestaurant from '../data/test/singleRestaurant';
import moment from 'moment';
//import open table API from open table api

class OpenTable extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  getOpenTableRestaurantInfo() {
    return singleRestaurant["times_available"];
  }

  getTravelDaysDropDown() {
    // return mock dates for now
    const days = [
      '3/11/2017',
      '3/12/2017',
      '3/13/2017',
    ];
    const options = days.map((day, i) => (
      <option key={i} value={day}>{ day }</option>
    ));
    return (
      <select>
        { options }
      </select>
    );
  }

  render() {
    const times = this.getOpenTableRestaurantInfo();
    return (
      <div>
        <div>
          { this.getTravelDaysDropDown() }
        </div>
        <div>
          { times.map((time, i) => {
            return(
              <p key={i}>
                {moment(time.time).format("hh:mm")}
              </p>
            );
          }) }
        </div>
      </div>
    );
  }
}

export default OpenTable;
