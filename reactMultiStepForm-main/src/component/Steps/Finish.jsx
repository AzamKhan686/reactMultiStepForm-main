import React from "react";
import { Box, Paper,Grid } from "@material-ui/core";
import { styles } from "../common/styles";
import { renderText } from "../common/DisplayComponent";
import EmailIcon from '@mui/icons-material/Email';

const Finish = () => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={3}>
        {renderText({
          label: "Success! Your Account is Created.",
          type: "h5",
          color: "textPrimary",
          align: "center",
          fontFamily: "work sans",
        })}
         
      </Box>

      <Grid item xs={12} container justify="center" style={{ marginBottom: "10px", textAlign:'center'}}>
        <p style={{font:"20px work sans"}}>Please check your email for next steps. Your phone number should be textable in a few minutes.</p>
        
      </Grid>

      <Grid item xs={12} container justify="center" style={{ marginBottom: "10px"}}>
       <EmailIcon/>
        
      </Grid>


      <Grid item xs={12} container justify="center" style={{ marginBottom: "10px"}}>
        <p style={{font:"20px work sans"}}>Didn't receive an email?</p>
        
      </Grid>

      <Grid item xs={12} container justify="center">
        <p style={{font:"20px work sans"}}>Check your SPAM folder</p>
        
      </Grid>

      <Grid item xs={12} container justify="center">
        <p style={{font:"20px work sans"}}>or</p>
        
      </Grid>

        <Grid container component={Box} justify="center" mb={2} p={2}>
        <a href="#">Resend Email</a>
      </Grid>

    </Paper>
  );
};

export default Finish;
