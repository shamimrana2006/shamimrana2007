import { ClassNames } from "@emotion/react";
import { Label } from "@mui/icons-material";
import { Card, Container, TextField, Typography, Button } from "@mui/material";
import React from "react";

let checkd = true;

function page() {
  return (
    <Container className="flex items-center justify-center min-h-screen">
      <Card elevation={2} sx={{ width: "300px" }} className="p-5 text-center ">
        <Typography variant="p">Register</Typography>

        <div className="flex flex-col gap-2">
          <TextField size="small" variant="standard" label="Name"></TextField>
          <TextField size="small" variant="standard" label="Email"></TextField>
          <TextField size="small" label="Phone" variant="standard"></TextField>
          <TextField
            size="small"
            variant="standard"
            label="New password"
          ></TextField>
          <TextField
            size="small"
            variant="standard"
            label="Confirm password"
          ></TextField>
          <div>
            <Button
              variant="contained"
              className="mt-2"
              size="small"
              color="success"
            >
              Register Now
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default page;
