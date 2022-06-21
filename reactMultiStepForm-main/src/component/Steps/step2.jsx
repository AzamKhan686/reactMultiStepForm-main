import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev, data }) => {
  return (
   <Grid style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Verify Your Phone Number",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {isMobile ? (
        <Grid>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <p style={styles.Textfont}>
                You will immediately receive an automated phone call to{" "}
                <span style={{ color: "#FF6E51" }}>
                  <b>{data.phone}</b>
                </span>{" "}
                with a PIN number to verify ownership.{<br></br>}
                {<br></br>} Have a pen and paper handy!
              </p>
            </Grid>

            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container component={Box} justify="center" mb={2} mt={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Box>
                {renderButton({ label: "Call Me", onClick: handleNext })}
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              {" "}
              <Box ml={6}>
                <p style={styles.Textfont}>
                  You will immediately receive an automated phone call to{" "}
                  <span style={{ color: "#FF6E51" }}>
                    <b>{data.phone}</b>
                  </span>{" "}
                  with a PIN number to verify ownership.{<br></br>}
                  {<br></br>} Have a pen and paper handy!
                </p>{" "}
              </Box>
            </Grid>

            <Grid item xs={2}></Grid>
          </Grid>

          <Grid container component={Box} justify="center" mb={2} p={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <Box>
                {renderButton({ label: "Call Me", onClick: handleNext })}
              </Box>
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Step2;
