import React from "react";
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
      

      <Grid container spacing={1}> 
      <Grid item xs={3}> 
      
      </Grid>
      <Grid item xs={6} spacing={1} style={{flexDirection:'row', backgroundColor:'red'}}> 
       <Box>
       <TextField variant='outlined'/>
       <TextField variant='outlined'/>
       <TextField variant='outlined'/>
       <TextField variant='outlined'/>
       </Box>
      </Grid>
      <Grid item xs={3}> 
      
      </Grid>
      </Grid>
        

      <Grid container component={Box} justify='center' mb={2} p={2}>
      <Grid item xs={3}> 
      
      </Grid>
      <Grid item xs={6}>
        <Box ml={2}>{renderButton({ label: "Submit", onClick: handleNext })}</Box>
        
        </Grid>
        <Grid item xs={3}> 
    
      </Grid>
      </Grid>
    </Paper>
  );
};

export default Step3;
