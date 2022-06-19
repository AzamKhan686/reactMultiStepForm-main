import { Button, MenuItem, TextField, Typography } from "@material-ui/core";
import { styles } from "../common/styles";

export const renderText = ({type, label, color, ...rest }) => (
  <Typography variant={type} color={color} {...rest}>
    <span style={styles.Textfont}>{label}</span>
  </Typography>
);

export const renderInputField = ({ required, name, label, type, state, onChange }) => {
  const { data, errors } = state;
  return (
    <TextField
      required={required ? false : true}
      label= {<span style={styles.Textfont}>{label}</span>}
      type={type ? type : "text"}
      variant='outlined'
      color='primary'
      size='small'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? <span style={styles.Textfont}>{errors[name]}</span> : ""}
      onChange={onChange}
      
    />
  );
};
export const renderSelect = ({ name, label, options, state, onChange }) => {
  const { data, errors } = state;
  return (
    <TextField
    required
      select
      label={<span style={styles.Textfont}>{label}</span>}
      variant='outlined'
      color='primary'
      size='small'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}>
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.key}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const renderButton = ({label, variant, color, fullWidth, onClick }) => (
  <Button
    style={{ width: "100%", backgroundColor:"#FF6E51", color:"#ffffff"}}
    variant={variant ? variant : "outlined"}
    // color={color ? color : "primary"}
    // fullWidth={fullWidth ? fullWidth : false}
    onClick={onClick}
    >
    <span style={styles.Textfont}>{label}</span>
  </Button>
);
