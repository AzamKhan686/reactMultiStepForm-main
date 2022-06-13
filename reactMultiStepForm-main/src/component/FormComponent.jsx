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

      highestDegree: "",
      issuedBy: "",
      yearOfPassing: "",
      jobType: "",

      skill: "",
      jobApplyFor: "",
      workExperence: "",
      expectedSalary: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validity :{
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
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
      const { data, errors,validity } = this.state;

      if (target.name == "firstName") {
        if (  target.value.length < 2){
          errors.firstName = `First name should have at least 2 letters`
           validity.firstName = false
        }
        else{
          errors[target.name] = ""
          validity.firstName = true;
        }
      }
      if (target.name == "lastName") {
       if( target.value.length < 2){
        errors.lastName = `Last name should have at least 2 letters`
        validity.lastName = false
       }
       else{
        errors[target.name] = ""
        validity.lastName = true;
       }
         
      }
      if (target.name == "email") {
        let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
        if (target.value.length <= 9 && !regex.test(target.value)){
          errors.email = `Email is not valid!`
          validity.email = false
        }
        else{
          errors[target.name] = ""
          validity.email = true
        }
      
      }

      if (target.name == "phone") {
        var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        if( !phoneNumberPattern.test(target.value)){
          errors.phone = `Invalid phone number please use (xxx) xxx - xxxx format`
          validity.phone = false
        }
        else{
          errors[target.name] = ""
          validity.phone = true
        }
       
      }

      data[target.name] = target.value;
      this.setState({ data, errors });
    };

    const handleNextStep = () => {
      let { stepCount, data, errors,validity } = this.state;
      console.log(validity)
   if (validity.email && validity.firstName && validity.lastName && validity.phone){
     stepCount = stepCount + 1;
   this.setState({ stepCount });
   }
   else{
    
    if(data.firstName == ''){
      
      errors.phone = `phone number is required`;
      console.log(errors.phone)
    }
   }
   
    }
    const handleBackStep = () => {
      let { stepCount } = this.state;
      stepCount = stepCount - 1;
      this.setState({ stepCount });
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
              handlePrev={handleBackStep}
            />
          );
        case 2:
          return (
            <Step3
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
              handleSubmit={handleSubmit}
            />
          );
        case 3:
          return <FinalStep data={this.state.data} />;
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
