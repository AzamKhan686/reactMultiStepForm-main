import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  Paper,
  withStyles,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import Step1 from "./Steps/step1";
import Step2 from "./Steps/step2";
import Step3 from "./Steps/step3";
import Step4 from "./Steps/step4";
import Step5 from "./Steps/step5";
import Step6 from "./Steps/step6";
import Finish from "./Steps/Finish";


import FinalStep from "./Steps/FinalStep";
import { renderText } from "./common/DisplayComponent";
import { styles } from "./common/styles";

class FormComponent extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      chkb: "",
      otp: "",
      business: "",
      phone2: "",
      streetno: "",
      streetname: "",
      address2: "",
      city: "",
      province: "",
      zip: "",
      zip2: "",
      accountName: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      business: "",
      phone2: "",
      streetno: "",
      streetname: "",
      address2: "",
      city: "",
      province: "",
      zip: "",
      zip2: "",
      accountName: "",
    },
    validity: {
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      chkb: false,
      business: false,
      phone2: false,
      streetno: false,
      streetname: false,
      address2: false, //optional
      city: false,
      province: false,
      zip: false,
      zip2: false, //optional\
      accountName: false,
    },
    steps: [
      { label: "Personal Bio" },
      { label: "Educational" },
      { label: "Professional" },
    ],
    stepCount: 0,
  };
  render() {
    const { classes } = this.props;

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form submitted");
    };

    const handleOnChange = ({ target }) => {
      const { data, errors, validity } = this.state;

      if (target.name == "firstName") {
        if (target.value.length < 2) {
          errors.firstName = `First name should have at least 2 letters`;
          validity.firstName = false;
        } else {
          errors[target.name] = "";
          validity.firstName = true;
        }
      }
      if (target.name == "lastName") {
        if (target.value.length < 2) {
          errors.lastName = `Last name should have at least 2 letters`;
          validity.lastName = false;
        } else {
          errors[target.name] = "";
          validity.lastName = true;
        }
      }
      if (target.name == "email") {
        let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        if (target.value.length <= 9 && !regex.test(target.value)) {
          errors.email = `Email is not valid!`;
          validity.email = false;
        } else {
          errors[target.name] = "";
          validity.email = true;
        }
      }

      if (target.name == "phone") {
        var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if (!phoneNumberPattern.test(target.value)) {
          errors.phone = `Invalid phone number please use (xxx) xxx - xxxx format`;
          validity.phone = false;
        } else {
          errors[target.name] = "";
          validity.phone = true;
        }
        if (isNaN(target.value)) {
          return false;
        }
      }
      if (target.name == "chkb") {
        console.log(target.checked);
        if (target.checked == true) {
          validity.chkb = true;
        } else {
          validity.chkb = false;
        }
      }

      // if(target.name =="otp"){
      //   // if(isNaN(target.value)){
      //   //   return false
      //   // }
      //   if (target.nextSibling) {
      //     target.nextSibling.focus();
      // }
      // }

      if (target.name == "business") {
        if (target.value.length < 2) {
          errors.business = `Business name is invalid`;
          validity.business = false;
        } else {
          errors[target.name] = "";
          validity.business = true;
        }
      }
      if (target.name == "phone2") {
        var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if (!phoneNumberPattern.test(target.value)) {
          errors.phone2 = `Invalid phone number please use (xxx) xxx - xxxx format`;
          validity.phone2 = false;
        } else {
          errors[target.name] = "";
          validity.phone2 = true;
        }
        if (isNaN(target.value)) {
          return false;
        }
      }
      if (target.name == "streetno") {
        if (isNaN(target.value)) {
          validity.streetno = true;
          return false;
        } else {
          errors[target.name] = "";
          validity.streetno = true;
        }
      }

      if(target.name == "streetname"){
          if(target.value == ""){
            errors.streetname = `Street name is required`;
            validity.streetname = false;
          }
          else {
            errors[target.name] = "";
            validity.streetname = true;
          }
      }

      if(target.name == "city"){
        if(target.value == ""){
          errors.city = `City is required`;
          validity.city = false;
        }
        else {
          errors[target.name] = "";
          validity.city = true;
        }
      }

      if (target.name == "province") {
        if (target.value == "") {
          errors.province = `Please select province`;
          validity.province = false;
        } else {
          errors[target.name] = "";
          validity.province = true;
        }
      }

      if (target.name == "zip") {
        if (isNaN(target.value)) {
          errors.zip = `Not a valid postal code`;
          validity.zip = false;
          return false;
        } else {
          errors[target.name] = "";
          validity.zip = true;
        }
      }

      if (target.name == "accountName") {
        if (target.value == "") {
          errors.accountName = "Account name can not be empty";
          validity.accountName = false;
        } else if (/[A-Z]/.test(target.value) == true) {
          errors.accountName = "Account name should have no uppercase letters";
          validity.accountName = false;
        } else if (/[0-9]/.test(target.value) == true) {
          errors.accountName = "Account name should numbers only between 0-9";
          validity.accountName = false;
        } else if (target.value.indexOf(" ") >= 0) {
          errors.accountName = "Account name should have no white spaces";
          validity.accountName = false;
        } else {
          errors.accountName = "";
          validity.accountName = true;
        }
      }

      data[target.name] = target.value;
      this.setState({ data, errors });
    };

    const handleNextStep = () => {
      let { stepCount, data, errors, validity } = this.state;
      
      if(stepCount == 0){
        
      if (
        validity.email &&
        validity.firstName &&
        validity.lastName &&
        validity.phone &&
        validity.chkb
      ) {
        stepCount = stepCount + 1;
        this.setState({ stepCount });
        console.log(stepCount);
      }
      else{
        alert("Fields are missing")
      }
    }
    else if(stepCount == 1) {
        stepCount = stepCount + 1;
        this.setState({ stepCount });
        console.log(stepCount);
    }
    else if(stepCount == 2) {
      stepCount = stepCount + 1;
      this.setState({ stepCount });
      console.log(stepCount);
      
  }
  else if(stepCount == 3) {
    stepCount = stepCount + 1;
    this.setState({ stepCount });
    console.log(stepCount);
    
}
else if(stepCount == 4) {
  if (validity.business && validity.phone2 && validity.streetno && validity.streetname && validity.city && validity.province && validity.zip){
       stepCount = stepCount + 1;
       this.setState({ stepCount });
       console.log(stepCount);
  }
  else{
  //   for(var i=0; i<data.length; i++){
  //   if(this.data[i] == ""){
  //   errors[i] = `This field is required`
  //   alert("errors")
  //   }
  // }
  alert("Fields are missing")
  }
}
else if(stepCount == 5) {
  if(validity.accountName){
  stepCount = stepCount + 1;
  this.setState({ stepCount });
  console.log(stepCount);
  }
  else{
    alert("Enter your account name")
  }
}

else if(stepCount == 6){
  stepCount = stepCount + 1;
  this.setState({ stepCount });
  console.log(stepCount);
}

else if(stepCount == 7){
  stepCount = stepCount + 1;
  this.setState({ stepCount });
  console.log(stepCount);
}
     
      
      
      else {
        console.log("no")
      }

    };

  

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            />
          );
        case 1:
          return (
            <Step2
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              
            />
          );
        case 2:
          return (
            <Step3
            
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
             
              handleSubmit={handleSubmit}
            />
          );
        case 3:
          return (
            <Step4
            data={this.state.data}
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            
              handleSubmit={handleSubmit}
            />
          );
        case 4:
          return (
            <Step5
            data={this.state.data}
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              
              handleSubmit={handleSubmit}
            />
          );
        case 5:
          return (
            <Step6
            
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
             
              handleSubmit={handleSubmit}
            />
          );
          case 6:
            return <FinalStep data={this.state.data} handleNext={handleNextStep} handleSubmit={handleSubmit}/>;

            case 7:
              return <Finish/>;
        
        default:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            />
          );
      }
    };

    return (
      <Grid container className={classes.formContainer}>
        <Grid item xs={12} sm={7}>
          <form onSubmit={this.handleSubmit} className={classes.form}>
            <Paper component={Box} mb={1}></Paper>
            {getStepContent(this.state.stepCount)}
          </form>
        </Grid>
      </Grid>
    );
  }
}

FormComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormComponent);
