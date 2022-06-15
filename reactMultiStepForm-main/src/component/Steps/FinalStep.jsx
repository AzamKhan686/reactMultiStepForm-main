import React from "react";
import { Box, Paper,Grid } from "@material-ui/core";
import { styles } from "../common/styles";
import { renderText,renderButton } from "../common/DisplayComponent";

const FinalStep = ({ data, handleNext }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Review Your Information & Create Account",
          type: "h6",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
      </Box>

      <Grid item xs={12} container style={{ marginBottom: "10px"}}>
        <p style={{font:"17px work sans" }}>Please review your information before creating your Alive5 account.</p>
        
      </Grid>

      <Grid item xs={12} >
        {renderText({
          label: "BUSINESS PHONE NUMBER:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>

        <Grid container style={{ marginBottom: "15px"}}>
        <Grid item xs={12}>
        {renderText({
          label: data.phone,
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>
        
      </Grid>

      <Grid item xs={12} >
        {renderText({
          label: "NAME OF BUSINESS:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>

        <Grid container style={{ marginBottom: "15px"}}>
        <Grid item xs={12}>
        {renderText({
          label: data.business,
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>
        
      </Grid>

      <Grid item xs={12} >
        {renderText({
          label: "AUTHORIZED SIGNER:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>

        <Grid container style={{ marginBottom: "15px"}}>
        <Grid item xs={12}>
        {renderText({
          label: `${data.firstName} ${data.lastName}`,
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>
        
      </Grid>

      <Grid item xs={12} >
        {renderText({
          label: "EMAIL ADDRESS:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>

        <Grid container style={{ marginBottom: "15px"}}>
        <Grid item xs={12}>
        {renderText({
          label: data.email,
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>
        
      </Grid>
      <Grid item xs={12} >
        {renderText({
          label: "YOUR PHONE NUMBER:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>

        <Grid container style={{ marginBottom: "15px"}}>
        <Grid item xs={12}>
        {renderText({
          label: data.phone2,
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>
        
      </Grid>

      <Grid item xs={12} >
        {renderText({
          label: "ACCOUNT NAME:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>

        <Grid container style={{ marginBottom: "15px"}}>
        <Grid item xs={12}>
        {renderText({
          label: data.accountName,
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>
        
      </Grid>

      <Grid item xs={12} >
        {renderText({
          label: "SERVICE ADDRESS:",
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>

        <Grid container style={{ marginBottom: "15px"}}>
        <Grid item xs={12}>
        {renderText({
          label: `${data.streetno} ${data.streetname}`,
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>
        <Grid item xs={12}>
        {renderText({
          label: `${data.city} ${data.province}, ${data.zip}-${data.zip2}`,
          type: "h7",
          color: "textPrimary",
          align: "left",
          fontFamily: "work sans",
        })}
        </Grid>
        
      </Grid>

      {/* {JSON.stringify(data, null, 4)} */}
      <Grid container justify="center" p={2} style={{ marginTop:"50px", marginBottom:"25px"}}>
        {renderButton({ label: "Create Account", onClick: handleNext })} 
      </Grid>
    </Paper>
  );
};

export default FinalStep;
