import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";

import "./EnterNumberPage.scss";

export const EnterNumberPage = () => {
  return (
    <Grid container className="container">
      <form noValidate autoComplete="off">
        <TextField>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />{" "}
          <Button variant="contained">Reveal Your Secrets</Button>
        </TextField>
      </form>
    </Grid>
  );
};
