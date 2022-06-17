import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
const LandingPage = () => {
    const paperStyle = { padding: '30px 20px', width: 400, margin: "30px" }
    const headerStyle = { margin: 0 }
    
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper elevation={1} style={paperStyle}>
                <Grid align='left'>
                    <h2 style={headerStyle}>Sign Up</h2>
                   
                </Grid>
                <Grid align='left' style={{marginTop:"25px"}}>
                    
                    <Typography variant='h7' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <Grid style={{marginBottom:"25px"}}>
                    <TextField 
                    fullWidth 
                    label='Phone Number' 
                    placeholder="Enter your email" 
                    variant='outlined' 
                    color='primary' 
                    size='small'
                    name='phone'
                  
                    />
                    </Grid>
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default LandingPage;