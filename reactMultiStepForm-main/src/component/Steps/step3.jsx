import React, { useState } from "react";
import { Box, Grid, Paper, TextField } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step3 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Enter 4 digit verification PIN",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container mt={2}>
        <Grid item xs={2}></Grid>
        
        <Grid item  xs={8}  justify="center" style={{ display: "flex", flexDirection: "row" }} >
         
          <Grid item xs={2} style={{ marginLeft: "10px" }}>
            <TextField
              variant="outlined"
              name="otp1"
              type="text"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 1);
              }}
            />
           
          </Grid>
       
          <Grid item xs={2} style={{ marginLeft: "10px" }}>
            <TextField
              variant="outlined"
              name="otp2"
              type="text"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 1);
              }}
            />
          </Grid>
          <Grid item xs={2} style={{ marginLeft: "10px" }}>
            <TextField
              variant="outlined"
              name="otp3"
              type="text"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 1);
              }}
            />
          </Grid>
          <Grid item xs={2} style={{ marginLeft: "10px" }}>
            <TextField
              variant="outlined"
              name="otp4"
              type="text"
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 1);
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <Grid container component={Box} justify="center" p={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Box ml={2} mt={2}>
            {renderButton({ label: "Submit", onClick: handleNext })}
          </Box>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <Grid container component={Box} justify="center" mb={2} p={2}>
        <a href="#">Call Me Again</a>
      </Grid>
    </Paper>
  );
};

export default Step3;
