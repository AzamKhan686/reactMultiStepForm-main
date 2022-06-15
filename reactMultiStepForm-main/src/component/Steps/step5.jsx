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

const Step5 = ({ state, handleChange, handleNext , data}) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Create Your Alive5 Account",
          type: "h6",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
      </Box>

      <Grid item xs={12} container style={{ marginBottom: "10px"}}>
        <p style={{font:"17px work sans" }}>Please complete additional information about your organization:</p>
        
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
          label: data.phone,
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
          label: `${data.firstName} ${data.lastName}`,
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
          label: data.email,
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
            type: "text",
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
                { key: "Alabama", value: "Alabama" },
                { key: "Arizona", value: "Arizona" },
                { key: "Arkansas", value: "Arkansas" },
                { key: "California", value: "California" },
                { key: "Colorado", value: "Colorado" },
                { key: "Connecticut", value: "Connecticut" },
                { key: "Delaware", value: "Delaware" },
                { key: "Florida", value: "Florida" },
                { key: "Georgia", value: "Georgia" },
                { key: "Hawaii", value: "Hawaii" },
                { key: "Idaho", value: "Idaho" },
                { key: "Illinois", value: "Illinois" },
                { key: "Indiana", value: "Indiana" },
                { key: "Iowa", value: "Iowa" },
                { key: "Kansas", value: "Kansas" },
                { key: "Kentucky", value: "Kentucky" },
                { key: "Louisiana", value: "Louisiana" },
                { key: "Maine", value: "Maine" },
                { key: "Maryland", value: "Maryland" },
                { key: "Massachusetts", value: "Massachusetts" },
                { key: "Michigan", value: "Michigan" },
                { key: "Minnesota", value: "Minnesota" },
                { key: "Mississippi", value: "Mississippi" },
                { key: "Missouri", value: "Missouri" },
                { key: "Montana", value: "Montana" },
                { key: "Nebraska", value: "Nebraska" },
                { key: "Nevada", value: "Nevada" },
                { key: "New Hampshire", value: "New Hampshire" },
                { key: "New Jersey", value: "New Jersey" },
                { key: "New Mexico", value: "New Mexico" },
                { key: "New York", value: "New York" },
                { key: "North Carolina", value: "North Carolina" },
                { key: "North Dakota", value: "North Dakota" },
                { key: "Ohio", value: "Ohio" },
                { key: "Oklahoma", value: "Oklahoma" },
                { key: "Oregon", value: "Oregon" },
                { key: "Pennsylvania", value: "Pennsylvania" },
                { key: "Rhode Island", value: "Rhode Island" },
                { key: "South Carolina", value: "South Carolina" },
                { key: "South Dakota", value: "South Dakota" },
                { key: "Tennessee", value: "Tennessee" },
                { key: "Taxes", value: "Taxes" },
                { key: "Utah", value: "Utah" },
                { key: "Vermont", value: "Vermont" },
                { key: "Virginia", value: "Virginia" },
                { key: "Washington", value: "Washington" },
                { key: "West Virginia", value: "West Virginia" },
                { key: "Wisconsin", value: "Wisconsin" },
                { key: "Wyoming", value: "Wyoming" }
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
