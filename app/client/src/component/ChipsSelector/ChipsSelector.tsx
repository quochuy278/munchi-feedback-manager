import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  TextField,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState, useRef } from "react";
import { SurveyStatus, SurveyStatusEnum } from "../IconRating/IconRating.type";
import styles from "./ChipsSelector.module.css";
const chipCollection = [
  {
    type: SurveyStatusEnum.TERRBILE,
    collection: [
      "Terrible",
      "Waiting time",
      "Professionalism",
      "Positiveness",
      "Atmosphere",
    ],
  },
  {
    type: SurveyStatusEnum.BAD,
    collection: [
      "Bad",
      "Waiting time",
      "Professionalism",
      "Positiveness",
      "Atmosphere",
    ],
  },
  {
    type: SurveyStatusEnum.OK,
    collection: [
      "OK",
      "Waiting time",
      "Professionalism",
      "Positiveness",
      "Atmosphere",
    ],
  },
  {
    type: SurveyStatusEnum.GOOD,
    collection: [
      "Good",
      "Waiting time",
      "Professionalism",
      "Positiveness",
      "Atmosphere",
    ],
  },
  {
    type: SurveyStatusEnum.AWESOME,
    collection: [
      "Awesome",
      "Waiting time",
      "Professionalism",
      "Positiveness",
      "Atmosphere",
    ],
  },
];

const renderChipCollection = ({
  feedbackStatus,
  chipSelect,
  selectedChips,
}: Omit<
  ChipsSelectorProps,
  "comment" | "submitComment"
>): React.ReactElement | null => {
  if (feedbackStatus > chipCollection.length) {
    return null;
  }
  const { collection } = chipCollection[feedbackStatus];

  const selectHandler = (chipValue: string) => {
    chipSelect(chipValue);
  };

  return (
    <>
      {collection.map((chipLabel: string, index: number) => {
        return (
          <Chip
            label={chipLabel}
            key={index}
            clickable
            classes={{ label: styles.chipLabel }}
            variant="filled"
            {...(selectedChips.includes(chipLabel)
              ? { color: "primary" }
              : { classes: { filled: styles.chipFilled } })}
            onClick={() => selectHandler(chipLabel)}
          />
        );
      })}
    </>
  );
};

type ChipsSelectorProps = {
  selectedChips: string[];
  feedbackStatus: SurveyStatus;
  comment: string;
  submitComment: (event: any) => void;
  chipSelect: (chipValue: string) => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ChipsSelector = ({
  feedbackStatus,
  chipSelect,
  selectedChips,
  comment,
  submitComment,
}: ChipsSelectorProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const commentInputRef = useRef();
  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitComment = () => {
    const comment:string = commentInputRef.current?.value??  ''
    submitComment(comment);
    setOpen(false);
  };

  return (
    <Box className={styles.container}>
      {renderChipCollection({
        feedbackStatus: feedbackStatus - 1,
        chipSelect,
        selectedChips,
      })}
      <Chip
        icon={<AddIcon />}
        label="Add a comment for the restaurant"
        variant="outlined"
        color="primary"
        classes={{
          label: styles.chipLabel,
        }}
        onClick={handleDialogOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add a comment for the restaurant</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            defaultValue={comment ? comment : ""}
            id="inputField"
            label="Feedback"
            placeholder="Write your feedback for the restaurant"
            type="text"
            variant="standard"
            fullWidth
            inputRef={commentInputRef}
            // value={inputValue}
            // onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions
          classes={{
            root: styles.dialogActions,
          }}
        >
          <Button
            onClick={handleSubmitComment}
            variant="contained"
            classes={{
              root: styles.dialogBtn,
            }}
          >
            Save
          </Button>
          <Button
            onClick={handleClose}
            classes={{
              root: styles.dialogBtn,
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ChipsSelector;
