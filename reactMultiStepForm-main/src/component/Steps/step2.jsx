import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Verify Your Phone Number",
          type: "h6",
          color: "textPrimary",
          align: "center",
          fontFamily: "work sans",
        })}
      </Box>
      <Grid container spacing={1}> 
      <Grid item xs={3}> 
      
      </Grid>
      <Grid item xs={6}> 
       <Box >
       <p style={{ font:"17px work sans" }}>You will immediately receive an automated phone call to +1-832-777-5555 with a PIN number to verify ownership.{<br></br>}{<br></br>} Have a pen and paper handy!</p>
      </Box>
      </Grid>
      <Grid item xs={3}> 
      
      </Grid>
      </Grid>
      
      <Grid container component={Box} justify='center' mb={2} p={2}>
      <Grid item xs={3}> 
      
      </Grid>
      <Grid item xs={6}>
        <Box ml={2}>{renderButton({ label: "Call Me Now", onClick: handleNext })}</Box>
        
        </Grid>
        <Grid item xs={3}> 
    
      </Grid>
      </Grid>
    </Paper>
  );
};

export default Step2;
