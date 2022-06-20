import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderText,
} from "../common/DisplayComponent";
import { isBrowser } from "react-device-detect";

const Step6 = ({ state, handleChange, handleNext }) => {
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

      {isBrowser ? (
        <Grid>
          <Grid container component={Box} justify="center" p={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Box ml={2}>
                <p style={styles.Textfont}>
                  This is a suggested name which will be your "Account Name"
                  used by you and your team members to access your account.{" "}
                  {<br></br>}
                  {<br></br>}To change it, just edit and submit
                </p>
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>

          <Grid container component={Box} justify="center" mb={2} p={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Box ml={2}>
                {" "}
                {renderInputField({
                  state,
                  name: "accountName",
                  label: "Account Name",
                  type: "text",
                  onChange: handleChange,
                })}
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>

          <Grid container component={Box} justify="center" mb={2} p={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Box ml={2}>
                {renderButton({
                  label: "Check Availability",
                  onClick: handleNext,
                })}
              </Box>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid>
          <Grid container component={Box} justify="center" p={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Box>
                <p style={styles.Textfont}>
                  This is a suggested name which will be your "Account Name"
                  used by you and your team members to access your account.{" "}
                  {<br></br>}
                  {<br></br>}To change it, just edit and submit
                </p>
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>

          <Grid container component={Box} justify="center" mb={2} p={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Box>
                {" "}
                {renderInputField({
                  state,
                  name: "accountName",
                  label: "Account Name",
                  type: "text",
                  onChange: handleChange,
                })}
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>

          <Grid container component={Box} justify="center" mb={2} p={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Box>
                {renderButton({
                  label: "Check Availability",
                  onClick: handleNext,
                })}
              </Box>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default Step6;
