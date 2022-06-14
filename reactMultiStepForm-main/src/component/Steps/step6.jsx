import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step6 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Confirm Your Account Name",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      {/* <Grid container component={Box} justify='center' p={2}> 
      <Grid item xs={3}> 
      
      </Grid>
      <Grid item xs={6}> 
      <p style={{ font:"17px work sans" }}>This is a suggested name which will be your "Account  Name" used by you and your team members to access your account. {<br></br>}To change it, just edit and submit</p>
      </Grid>
      <Grid item xs={3}> 
      
      </Grid>
      </Grid> */}

<Grid container component={Box} justify='center' p={2}>
      <Grid item xs={3}> 
      
      </Grid>
      <Grid item xs={6}>
        <Box ml={2}><p style={{ font:"17px work sans" }}>This is a suggested name which will be your "Account  Name" used by you and your team members to access your account. {<br></br>}{<br></br>}To change it, just edit and submit</p></Box>
        
        </Grid>
        <Grid item xs={3}> 
    
      </Grid>
      </Grid>

      
      <Grid container component={Box} justify='center' mb={2} p={2}>
      <Grid item xs={3}> 
      
      </Grid>
      <Grid item xs={6}>
        <Box ml={2}> {renderInputField({
            state,
            name: "accountName",
            label: "",
            type: "text",
            onChange: handleChange,
          })}</Box>
        
        </Grid>
        <Grid item xs={3}> 
    
      </Grid>
      </Grid>
      
      <Grid container component={Box} justify='center' mb={2} p={2}>
      <Grid item xs={3}> 
      
      </Grid>
      <Grid item xs={6}>
        <Box ml={2}>{renderButton({ label: "Check Availability", onClick: handleNext })}</Box>
        
        </Grid>
        <Grid item xs={3}> 
    
      </Grid>
      </Grid>
    </Paper>
  );
};

export default Step6;
