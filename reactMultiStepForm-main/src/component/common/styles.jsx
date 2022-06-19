import { blueGrey } from "@material-ui/core/colors";

export const styles = {
  formContainer: {
    display: "flex",
    flexFlow: "row Wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "98vh",
  },

  form: {
    padding: "20px",
    minHeight: "350px",
    height: "auto",
  },
  formTitle: {
    color: blueGrey[700],
    textAlign: "center",
    margin: "10px 0px 30px 0px",
  },

  steps: {
    padding: "20px",
  },

  otpfield:{
    width: "10%",
    height:"50%",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
    marginTop: "25px",
    textIndent: "43%",
    marginLeft: "12px",
  },

  otpSmallScreen:{
    width: "20%",
    height:"38%",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
    marginTop: "25px",
    textIndent: "38%",
    marginLeft: "12px",
  },

  Textfont:{
    fontFamily:'work sans'
  }
};
