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
  const [otp, setOtp] = useState();
  const handleOTPChange = (target) => {
    if (isNaN(target.value)) 
    return false;

    // setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (target.nextSibling) {
        target.nextSibling.focus();
    }
};

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Enter 4 digit verification PIN",
          type: "h6",
          color: "textPrimary",
          align: "center",
          fontFamily: "work sans",
        })}
      </Box>

      <Grid container mt={2}>
        <Grid item xs={2}></Grid>
        
        <Grid item  xs={8}  justify="center" style={{ display: "flex", flexDirection: "row" }} >
         
          <Grid item xs={2} style={{ marginLeft: "10px" }}>
            <TextField
            style={{ textAlign:'center' }}
              variant="outlined"
              name="otp"
              type="text"
              
               onFocus={e => e.target.select()}
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
              name="otp"
              
              type="text"
              onFocus={e => e.target.select()}
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
              name="otp"
              
              type="text"
              onFocus={e => e.target.select()}
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
              name="otp"
              
              type="text"
              onFocus={e => e.target.select()}
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
        <a style={{ font:"work sans" }} href="#">Call Me Again</a>
      </Grid>
    </Paper>
  );
};

export default Step3;
