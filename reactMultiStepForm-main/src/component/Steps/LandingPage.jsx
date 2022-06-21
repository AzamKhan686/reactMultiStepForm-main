import React from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import FormLabel from "@material-ui/core/FormLabel";

import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderText,
} from "../common/DisplayComponent";
import {
  Box,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
const LandingPage = ({ state, handleChange, handleNext, errors }) => {
  const paperStyle = { padding: "30px 20px", width: 400, margin: "30px" };
  const headerStyle = { margin: 0 };

  const marginTop = { marginTop: 5 };
  return (
    <Paper elevation={1} style={paperStyle}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "DESKTOP",
          type: "",
          color: "textPrimary",
          align: "left",
        })}
      </Box>

      <Grid container spacing={2} style={{ marginBottom: "25px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone Number",
            type: "text",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "email",
            label: "Email Address",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "25px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            type: "text",
            name: "firstName",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "lastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid style={{ marginBottom: "25px" }}>
        <FormControl required error={errors}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  name="chkb"
                  color="default"
                  style={{ marginBottom: "20px" }}
                />
              }
              label={renderText({
                label:
                  "I represent the organization (owner of this phone number) and am authorized to complete this process.The voice line will not be",
                type: "",
                color: "textPrimary",
                align: "left",
              })}
            />
          </FormGroup>
          <FormHelperText>
            <span style={styles.Textfont}>{errors.chkb}</span>
          </FormHelperText>
        </FormControl>
      </Grid>

      <Grid
        container
        justify="center"
        mt={2}
        p={2}
        style={{ marginBottom: "25px" }}
      >
        {renderButton({ label: "Verify Phone Number", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default LandingPage;
