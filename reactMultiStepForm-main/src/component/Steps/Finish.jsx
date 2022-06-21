import React from "react";
import { Box, Paper,Grid } from "@material-ui/core";
import { styles } from "../common/styles";
import { renderText } from "../common/DisplayComponent";
import EmailIcon from '@mui/icons-material/Email';

const Finish = () => {
  return (
    <Grid style={styles.steps}>
      <Box mt={2} mb={3}>
        {renderText({
          label: "Success! Your Account is Created.",
          type: "h5",
          color: "textPrimary",
          align: "center",
        })}
         {/* <h2 style={{textAlign:"center", font:"work sans", fontWeight:"400"}}>Success! Your Account is Created.</h2> */}
      </Box>

      <Grid item xs={12} container justify="center" style={{ marginBottom: "10px", textAlign:'center'}}>
        <p style={{font:"20px work sans"}}>Please check your email for next steps. Your phone number should be textable in a few minutes.</p>
        
      </Grid>

      <Grid item xs={12} container justify="center" style={{ marginBottom: "10px"}}>
       <EmailIcon style={{ fontSize: 100, color:"#fc2003" }}/>
        
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
        <a href="#" style={styles.Textfont}>Resend Email</a>
      </Grid>

    </Grid>
  );
};

export default Finish;
