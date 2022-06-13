import React from "react";
import {
  Box,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderText,
} from "../common/DisplayComponent";

const Step1 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "COMCAST BUSINESS PHONE NUMBER",
          type: "h7",
          color: "textPrimary",
          align: "left",
          
        })}
      </Box>

      <Grid container spacing={2} style={{ marginBottom: "25px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone Number",
            type: "number",
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
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "25px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
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

      <Grid style={{ marginBottom: "25px" }}>
        <FormGroup>
          <FormControlLabel
            
            
            control={<Checkbox color="default" style={{ marginBottom: "20px" }} />}
            label={
              <p style={{ color: "#2A221C", font:"17px work sans" }}>
                I represent the organization (owner of this phone number) and am
                authorized to complete this process.The voice line will not be
              </p>
            }
          />
        </FormGroup>
      </Grid>

      <Grid container justify="center" mt={2} p={2} style={{ marginBottom: "25px"}}>
        {renderButton({ label: "Verify Phone Number", onClick: handleNext })} 
      </Grid>
    </Paper>
  );
};

export default Step1;
