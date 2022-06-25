import React from "react";
import {
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { styles } from "../common/styles";

import {
  renderButton,
  renderInputField,
  renderText,
} from "../common/DisplayComponent";

const LandingPage = ({ state, handleChange, handleNext, errors }) => {
  return (
    <Grid container direction={"row"}>
      <Grid item xs={5}>
        <Grid item xs={12}>
          <Box mb={8}>
            <h1
              style={{
                fontWeight: "400",
                fontFamily: "work sans",
                textRendering: "optimizeLegibility",
                fontDisplay: "swap",
                letterSpacing: "1px",
              }}
            >
              Add SMS to Your Business Line
            </h1>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Grid item xs={12}>
            <Box mt={2} mb={2}>
              {renderText({
                label: "COMCAST BUSINESS PHONE NUMBER:",
                type: "",
                color: "textPrimary",
                align: "left",
              })}
            </Box>
          </Grid>
          <Grid container spacing={2} style={{ marginBottom: "25px" }}>
            <Grid item xs={12}>
              {renderInputField({
                state,
                name: "phone",
                label: "Phone Number",
                type: "text",
                onChange: handleChange,
              })}
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginBottom: "25px" }}>
            <Grid item xs={6}>
              {renderInputField({
                state,
                type: "text",
                name: "firstName",
                label: "First Name",
                onChange: handleChange,
              })}
            </Grid>
            <Grid item xs={6}>
              {renderInputField({
                state,
                name: "lastName",
                label: "Last Name",
                onChange: handleChange,
              })}
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginBottom: "25px" }}>
            <Grid item xs={12}>
              {renderInputField({
                state,
                name: "email",
                label: "Email Address",
                type: "email",
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
                      style={{ marginBottom: "45px" }}
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

          <Grid container justify="center" mt={1} p={2}>
            {renderButton({
              label: "Verify Phone Number",
              onClick: handleNext,
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={7}>
        <img
          style={{ width: "100%", height: "100%", display: "inline" }}
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
