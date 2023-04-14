import React, { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

const DrinkRating = () => {
  const [choice, setChoice] = useState(null);
  const [hoverUp, setHoverUp] = useState(false);
  const [hoverDown, setHoverDown] = useState(false);

  const handleThumbsUp = () => {
    setChoice("liked");
  };

  const handleThumbsDown = () => {
    setChoice("disliked");
  };

  const renderMessage = () => {
    if (choice === "liked") {
      return <Typography variant="h6">You liked your drink!</Typography>;
    } else if (choice === "disliked") {
      return <Typography variant="h6">You didn't like your drink.</Typography>;
    }
  };

  return (
    <Container>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Thank you for your order
        </Typography>
        <Typography variant="h5" gutterBottom>
          Did you enjoy your drink?
        </Typography>
        <Box>
          <IconButton onClick={handleThumbsUp} onMouseEnter={() => setHoverUp(true)} onMouseLeave={() => setHoverUp(false)} color="secondary" size="large">
            <ThumbUpAltOutlinedIcon style={{ fontSize: "100px", opacity: hoverUp ? 1 : 0.6 }} />
          </IconButton>
          <IconButton onClick={handleThumbsDown} onMouseEnter={() => setHoverDown(true)} onMouseLeave={() => setHoverDown(false)} color="secondary" size="large">
            <ThumbDownAltOutlinedIcon style={{ fontSize: "100px", opacity: hoverDown ? 1 : 0.6 }} />
          </IconButton>
        </Box>
        {renderMessage()}
      </Box>
    </Container>
  );
};

export default DrinkRating;
