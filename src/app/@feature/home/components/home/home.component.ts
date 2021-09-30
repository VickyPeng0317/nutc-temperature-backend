import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { MqttService } from 'ngx-mqtt';
import * as mqttt from "mqtt";
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  ) {
    const connectString = 'ws://163.17.136.70:1884';

    var client = mqttt.connect(connectString, {clientId: 'angular'});

    client.on('connect', function () {
      console.log(123)
      client.publish('test/andy', 'andy_test/tmp_t')
      client.subscribe('andy_test/tmp_t');
    })

    client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString())
      // client.end()
    })
  }

  ngOnInit(): void {

  }


}
