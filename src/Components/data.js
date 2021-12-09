import React, {Component } from "react";
import axios from "axios";
import Cards from "./components/Cards";
import DatePicker from "react-datepicker";
var moment = require("moment");
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const begin = moment().utcOffset(timezone)._d;
const max = moment().utcOffset(timezone)._d;
const currentTime = moment().utcOffset(timezone.format());

export default class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            max: max,
            begin: begin,
            startDate: currentTime,
            data: null
        };
        this.handleChange = this.handleChange.bind(this);
    }
}