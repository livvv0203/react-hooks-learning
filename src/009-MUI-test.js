import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import {
  Delete,
  SaveAltSharp,
  FavoriteBorder,
  Favorite,
  Menu,
} from "@material-ui/icons";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import "@fontsource/roboto";

import "./Test.css";

const useStyle = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    marginBottom: 15,
    color: "white",
    padding: "5px 30px",
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },

  palette: {
    primary: {
      main: orange[500],
    },

    secondary: {
      main: green[500],
    },
  },
});

function ButtonStyled() {
  const classes = useStyle();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxTest() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked} // true or false
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            size="medium"
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          ></Checkbox>
        }
        label="Testing Checkbox"
      ></FormControlLabel>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" className="App">

        <AppBar>
            <Toolbar>
                <IconButton>
                    <Menu></Menu>
                </IconButton>
                <Typography>
                    MUI Playing App
                </Typography>
                <Button>
                    Login
                </Button>
            </Toolbar>
        </AppBar>


        <Typography variant="h2">Welcome to the Application!</Typography>

        <Typography variant="subtitle1">
          Keeping Learning, Stay Curious!
        </Typography>

        <ButtonStyled />

        <br></br>

        <Grid container spacing={4}>
            {/* xs - size mobile to spend 12 units */}
            <Grid item xs={3} sm={6} >
                <Paper style={{ height: 75, width: '100%', }}/>
            </Grid> 
            <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%', }}/>
            </Grid> 
            <Grid item xs={3} lg={12}>
                <Paper style={{ height: 75, width: '100%', }}/>
            </Grid> 
        </Grid>
        
        <TextField
          variant="outlined"
          color="secondary"
          type="email"
          label="Your Email"
          placeholder="test@test.com"
        />

        <CheckboxTest></CheckboxTest>

        <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<SaveAltSharp />}
            style={{ fontSize: 24 }}
            size="small"
          >
            Save
          </Button>

          <Button startIcon={<Delete />} style={{ fontSize: 28 }} size="large">
            Discard
          </Button>
        </ButtonGroup>
      </Container>
    </ThemeProvider>
  );
}
