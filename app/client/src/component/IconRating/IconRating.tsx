import React from "react";
import { Box, IconButton, Typography, Avatar } from "@mui/material";
import angryIcon from "../../assets/img/angryIcon.png";
import badIcon from "../../assets/img/badIcon.png";
import okIcon from "../../assets/img/okIcon.png";
import goodIcon from "../../assets/img/goodIcon.png";
import awesomeIcon from "../../assets/img/awesomeIcon.png";
import { Icon, IconSurveryProps, SurveyStatusEnum } from "./IconRating.type";

const Icons: Icon[] = [
  {
    name: "Terrible",
    iconSource: angryIcon,
    value: SurveyStatusEnum.TERRBILE,
  },
  {
    name: "Bad",
    iconSource: badIcon,
    value: SurveyStatusEnum.BAD,
  },
  {
    name: "Okay",
    iconSource: okIcon,
    value: SurveyStatusEnum.OK,
  },
  {
    name: "Good",
    iconSource: goodIcon,
    value: SurveyStatusEnum.GOOD,
  },
  {
    name: "Awesome",
    iconSource: awesomeIcon,
    value: SurveyStatusEnum.AWESOME,
  },
];

const IconSurvery = ({ selectRating }: IconSurveryProps) => {
  const handleSelecteStatus = (ratingValue: number) => {
    selectRating(ratingValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 0.5,
        flexWrap: "wrap",
      }}
    >
      {Icons.map((icon, index: number) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              placeItems: "center",
            }}
          >
            <IconButton onClick={() => handleSelecteStatus(icon.value)}>
              <Avatar src={icon.iconSource} />
            </IconButton>
            <Typography>{icon.name}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default IconSurvery;
