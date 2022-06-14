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
  renderSelect
} from "../common/DisplayComponent";

const Step5 = ({ state, handleChange, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Create Your Alive5 Account",
          type: "h6",
          color: "textPrimary",
          align: "left",
          
        })}
      </Box>

      <Grid item xs={12} container style={{ marginBottom: "10px"}}>
        <p style={{ color: "#2A221C", font:"17px work sans" }}>Please complete additional information about your organization:</p>
        
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "15px" }}>
        <Grid item xs={12} sm={6}>
        {renderText({
          label: "YOUR BUSINESS PHONE NUMBER:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          
        })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderText({
          label: "(xxx) xxx xxx",
          type: "h7",
          color: "textPrimary",
          align: "left",
          
        })}
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "15px" }}>
        <Grid item xs={12} sm={6}>
        {renderText({
          label: "YOUR NAME:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          
        })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderText({
          label: "BOB",
          type: "h7",
          color: "textPrimary",
          align: "left",
          
        })}
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "15px" }}>
        <Grid item xs={12} sm={6}>
        {renderText({
          label: "YOUR EMAIL:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          
        })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderText({
          label: "BOB@gmail.com",
          type: "h7",
          color: "textPrimary",
          align: "left",
          
        })}
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "25px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "business",
            label: "Business Name",
            type: "text",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "phone2",
            label: "Best phone number to reach you",
            type: "number",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid item xs={12} style={{marginBottom: "10px"}}>
        {renderText({
          label: "SERVICE ADDRESS",
          type: "h7",
          color: "textPrimary",
          align: "left",
          
        })}
        </Grid>
      

      <Grid container spacing={2} style={{ marginBottom: "15px"}}>
        <Grid item xs={3}>
          {renderInputField({
            state,
            name: "streetno",
            label: "Street Number",
            type: "text",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={9}>
          {renderInputField({
            state,
            name: "streetname",
            label: "Street Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid item xs={12} style={{ marginTop: "15px"}}>
          {renderInputField({
            state,
            name: "address2",
            label: "Address Line 2 (optional)",
            onChange: handleChange,
          })}
        </Grid>

        <Grid container spacing={2} style={{ marginTop: "15px"}}>
        <Grid item xs={6}>
          {renderInputField({
            state,
            name: "city",
            label: "City",
            type: "text",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={6}>
        {renderSelect({
            state,
            name: "province",
            label: "State/Province",
            options: [
              { key: "Florida", value: "s1" },
              { key: "Taxes", value: "s2" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginTop: "15px"}}>
        <Grid item xs={4}>
          {renderInputField({
            state,
            name: "zip",
            label: "ZIP / Postal Code",
            type: "text",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={4}>
          {renderInputField({
            state,
            name: "zip2",
            label: "ZIP Plus 4 (optional)",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container justify="center" p={2} style={{ marginTop:"50px", marginBottom:"25px"}}>
        {renderButton({ label: "Next", onClick: handleNext })} 
      </Grid>
    </Paper>
  );
};

export default Step5;
