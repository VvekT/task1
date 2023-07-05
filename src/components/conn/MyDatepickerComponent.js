import React, { Component } from "react";
 import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";
import { CasesIncidentFormConfig } from "./Data";

class MyDatepickerComponent extends Component {

    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {

        return (
            <div>
              <h1> <label style={{color:"dark-black"}}>End Duration Date :</label></h1> 
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                 
           </div>
        )
    };
}

export default MyDatepickerComponent;