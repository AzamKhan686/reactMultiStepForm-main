import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev,data }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Verify Your Phone Number",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={1}> 
      <Grid item xs={2}> 
      
      </Grid>
      <Grid item xs={8}> 
       <Box ml={4} >
       <p style={{ font:"work sans"}}>You will immediately receive an automated phone call to <span style={{color:"#FF6E51"}}><b>{data.phone}</b></span> with a PIN number to verify ownership.{<br></br>}{<br></br>} Have a pen and paper handy!</p>
      </Box>
      </Grid>
      <Grid item xs={2}> 
      
      </Grid>
      </Grid>
      
      <Grid container component={Box} justify='center' mb={2} p={2}>
      <Grid item xs={3}> 
      
      </Grid>
      <Grid item xs={6}>
        <Box>{renderButton({ label: "Call Me", onClick: handleNext })}</Box>
        
        </Grid>
        <Grid item xs={3}> 
    
      </Grid>
      </Grid>
    </Paper>
  );
};

export default Step2;
