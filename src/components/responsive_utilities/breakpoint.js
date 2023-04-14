import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";

const theme = createTheme();

function BreakPoint() {
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <div>
            {matches
                ? // Render for screen sizes above or equal to 'sm'
                ""
                : // Render for screen sizes below 'sm'
                ""}
        </div>
    );
}

export default BreakPoint;