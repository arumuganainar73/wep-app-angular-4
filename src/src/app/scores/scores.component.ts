import { Component, OnInit } from '@angular/core';
import { Country } from '../country';

import { AppProvider } from './scores.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  /*
  hero = 'Windstorm';
  */
  public country = {
    id: 1,
    country: '',
    score: ''
  };
  public testmode = true;
  public servermode = false;
  public testDataArray = [];
  public serverDataArray = [];
  constructor(public appProvider: AppProvider) {
    /**
     * load test data
     */
    this.testDataArray = this.testData();
    /**
      * load server data
      */
    appProvider.apiRequest().subscribe(res => {
      this.serverDataArray = this.serverData(res);
      console.log(res);
    });
  }

  ngOnInit() {

  }
  /**
   * listener the on change event
   */
  onChangeCountry(event) {
    let country = this.country.country;
    var data;
    if (this.testmode) {
      data = this.testDataArray;
    } else {
      data = this.serverDataArray;
    }
    let filteredData = data.forEach((item) => {
      if (country === item.country) {
        this.country = item;
      }
    }
    );
  }
  onchangeMode(event) {
    if (event === "test") {
      this.testmode = true;
    } else {
      this.servermode = true;
    }

  }
  /**
   * get the test data
   */
  testData() {
    var test_data = [{ country: "Pakistan", score: 23 }, { country: "Pakistan", score: 127 }, { country: "India", score: 3 }, { country: "India", score: 71 }, { country: "Australia", score: 31 }, { country: "India", score: 22 }, { country: "Pakistan", score: 81 },];
    test_data.forEach((val, ind) => {
      val.score = val.score;
    });
    return test_data;
  }

  serverData(serverdata) {
    var serverData = [];

    var server_data;
    if (serverdata) {
      server_data = serverdata;
    } else {
      server_data = [
        [
          "England",
          23
        ],
        [
          "England",
          127
        ],
        [
          "Sri Lanka",
          99
        ],
        [
          "Sri Lanka",
          99
        ],
        [
          "New Zealand",
          31
        ],
        [
          "Sri Lanka",
          101
        ],
        [
          "New Zealand",
          81
        ],
        [
          "Pakistan",
          23
        ],
        [
          "Pakistan",
          127
        ],
        [
          "India",
          3
        ],
        [
          "India",
          71
        ],
        [
          "Australia",
          31
        ],
        [
          "India",
          22
        ],
        [
          "Pakistan",
          81
        ]
      ];
    }
    server_data.forEach((value, index) => {
      serverData.push({
        id: index,
        country: value[0],
        score: value[1]
      });
    });
    return serverData;
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/