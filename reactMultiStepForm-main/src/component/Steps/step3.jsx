import React, { useState } from "react";
import { Box, Grid, Paper, TextField } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step3 = ({handleNext, handleSubmit,}) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
        element.nextSibling.focus();
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
        })}
      </Box>

      

      <Grid container mt={2}>
        <Grid item xs={2}></Grid>
        
        <Grid item  xs={8} justify="center" style={{ display: "flex", flexDirection: "row"}} >
         
        {otp.map((data, index) => {
                        return (
                            <input
                                style={styles.otpfield}
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

          
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
