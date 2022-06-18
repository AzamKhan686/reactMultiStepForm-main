import React, { useState } from "react";
import { Box, Grid, Paper, TextField } from "@material-ui/core";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step4 = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
  data,
}) => {

  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Success! Your Phone Number was Verified.",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container mt={2}>
        {/* <Grid item xs={2}></Grid> */}
        <Grid item xs={2}></Grid>
        
        <Grid item  xs={8}  justify="center" style={{ display: "flex", flexDirection: "row"}} >
        
        {<CheckCircleIcon style={{ fontSize: 25, color:"#20e631", marginRight:"10px", marginTop:"25px" }}/>}<h2 style={{color: "#20e631", font:"work sans"}}>{data.phone}</h2>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>

      <Grid container component={Box} justify="center" p={2}>
        {/* <Grid item xs={3}></Grid> */}
        <Grid item xs={6}>
          <Box ml={2} mt={2}>
            {renderButton({ label: "Next", onClick: handleNext })}
          </Box>
        </Grid>
        {/* <Grid item xs={3}></Grid> */}
      </Grid>
     
    </Paper>
  );
};

export default Step4;
