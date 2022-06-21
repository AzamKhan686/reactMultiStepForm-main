import React from "react";
import {
  Box,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormHelperText
} from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderText,
} from "../common/DisplayComponent";
import { isBrowser, isMobile } from "react-device-detect";

const Step1 = ({ state, handleChange, handleNext, errors }) => {
  return (
    
      <Grid style={styles.steps}>
        <Grid item xs={12}>
    <Box mt={2} mb={2}>
      
      {renderText({
        label: "COMCAST BUSINESS PHONE NUMBER",
        type: "",
        color: "textPrimary",
        align: "left",
      })}
      
    </Box>
    </Grid>
{isBrowser ? (<Grid container spacing={2} style={{ marginBottom: "25px" }}>
      <Grid item xs={12} sm={6}>
        {renderInputField({
          state,
          name: "phone",
          label: "Phone Number",
          type: "text",
          onChange: handleChange,
        })}
      </Grid>
      <Grid item xs={12} sm={6}>
        {renderInputField({
          state,
          name: "email",
          label: "Email Address",
          type: "email",
          onChange: handleChange,
        })}
      </Grid>
    </Grid>):
    ( <Grid container spacing={2} style={{ marginBottom: "10px" }}>
      <Grid item xs={12} sm={6}>
        {renderInputField({
          state,
          name: "phone",
          label: "Phone Number",
          type: "text",
          onChange: handleChange,
        })}
      </Grid>
      <Grid item xs={12} sm={6}>
        {renderInputField({
          state,
          name: "email",
          label: "Email Address",
          type: "email",
          onChange: handleChange,
        })}
      </Grid>
    </Grid>)}
   

    <Grid container spacing={2} style={{ marginBottom: "25px" }}>
      <Grid item xs={12} sm={6}>
        {renderInputField({
          state,
          type: "text",
          name: "firstName",
          label: "First Name",
          onChange: handleChange,
        })}
      </Grid>
      <Grid item xs={12} sm={6}>
        {renderInputField({
          state,
          name: "lastName",
          label: "Last Name",
          onChange: handleChange,
        })}
      </Grid>
    </Grid>
{isBrowser ? ( <Grid style={{ marginBottom: "25px" }}>
      <FormControl required error= {errors}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox  onChange={handleChange} name="chkb" color="default" style={{ marginBottom: "20px" }} />}
          label={renderText({
            label: "I represent the organization (owner of this phone number) and am authorized to complete this process.The voice line will not be",
            type: "",
            color: "textPrimary",
            align: "left",
          })}
            
          
        />
      </FormGroup>
      <FormHelperText><span style={styles.Textfont}>{errors.chkb}</span></FormHelperText>
      </FormControl>
    </Grid>):
    <Grid style={{ marginBottom: "25px" }}>
    <FormControl required error= {errors}>
    <FormGroup>
      <FormControlLabel
        control={<Checkbox  onChange={handleChange} name="chkb" color="default" style={{ marginBottom: "70px" }} />}
        label={renderText({
          label: "I represent the organization (owner of this phone number) and am authorized to complete this process.The voice line will not be",
          type: "",
          color: "textPrimary",
          align: "left",
        })}
          
        
      />
    </FormGroup>
    <FormHelperText><span style={styles.Textfont}>{errors.chkb}</span></FormHelperText>
    </FormControl>
  </Grid>}
    

    <Grid container justify="center" mt={2} p={2} style={{ marginBottom: "25px"}}>
      {renderButton({ label: "Verify Phone Number", onClick: handleNext })} 
    </Grid>
    </Grid>
   
   
  );
};

export default Step1;
