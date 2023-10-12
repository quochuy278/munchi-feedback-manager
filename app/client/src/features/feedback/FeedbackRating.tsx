import { Avatar, Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ChipsSelector from "../../component/ChipsSelector/ChipsSelector";
import IconSurvery from "../../component/IconRating/IconRating";
import { SurveyStatus } from "../../component/IconRating/IconRating.type";
import { Feedback, FeedbackTemplate } from "./FeedbackRating.type";
import { FEEDBACK_KEY, setLocalStorage } from "../../utils/localStorage";

type FeedbackProps = {
  templates: FeedbackTemplate[];
  data: Feedback[];
  index: number;
  currentPage: number;
  nextPage: (num: number) => void;
  prevPage: (num: number) => void;
};

const FeedbackRating = ({
  templates,
  data,
  index,
  currentPage,
  nextPage,
}: FeedbackProps) => {
  const [ratingSelected, setRatingSelected] = useState<SurveyStatus | null>(
    null
  );

  const [comment, setComment] = useState<string>("");

  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  useEffect(() => {
    if (data.length !== 0 && data[currentPage]) {
      setRatingSelected(data[index].data.feedbackRatings);
      setSelectedChips(data[index].data.chipComments);
      setComment(data[index].data.additionalComment);
    } else {
      setRatingSelected(null);
      setSelectedChips([]);
      setComment("");
    }
  }, [data, currentPage, index]);

  const handleChipClick = (chipValue: string) => {
    // Check if the chip is already selected
    const isSelected = selectedChips.includes(chipValue);

    // Update the selectedChips state based on the current selection
    setSelectedChips((prevSelectedChips) =>
      isSelected
        ? prevSelectedChips.filter((value) => value !== chipValue)
        : [...prevSelectedChips, chipValue]
    );
  };

  const handleSubmitComment = (comment: string) => {
    setComment(comment);
  };

  // console.log(templates[currentPage], " persis data");
  const handleAddFeedbackData = () => {
    const feedback: Feedback = {
      type: templates[currentPage].type,
      data: {
        feedbackRatings: ratingSelected!,
        chipComments: selectedChips,
        additionalComment: comment,
      },
    };

    const existedFeedback = data.filter(
      (feedbackType: Feedback) =>
        feedbackType.type === templates[currentPage].type
    );

    if (!existedFeedback || existedFeedback.length === 0) {
      setLocalStorage(FEEDBACK_KEY, JSON.stringify([...data, feedback]));
      if (currentPage === templates.length - 1) {
        console.log("no more redirect");
        return;
      } else {
        nextPage(1);
      }
    } else {
      return;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "white",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      {/* Business name and icon */}
      <Box
        sx={{
          display: "flex",
          placeItems: "center",
          flexDirection: "column",
          gap: 1,
          padding: 1,
          marginTop: 2,
        }}
      >
        <Avatar sx={{ height: "80px", width: "80px" }} />
        <Typography>Juicy Burger</Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {templates[currentPage].question}
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingInline: 0.5, textAlign: "center", fontSize: "0.9rem" }}
        >
          Your feedback helps us improve our products.
        </Typography>
        <IconSurvery selectRating={setRatingSelected} />
        <Box
          sx={{
            display: "flex",
            placeItems: "center",
            flexDirection: "column",
            gap: 1,
            padding: 1,
            marginTop: 2,
          }}
        >
          {ratingSelected && (
            <ChipsSelector
              comment={comment}
              selectedChips={selectedChips}
              feedbackStatus={ratingSelected}
              submitComment={handleSubmitComment}
              chipSelect={handleChipClick}
            />
          )}
        </Box>
      </Box>

      <Button
        variant="contained"
        {...(ratingSelected ? { disabled: false } : { disabled: true })}
        sx={{
          marginInline: 1,
          borderRadius: "1rem",
          padding: 1.25,
          "&:focus": {
            outline: "none",
          },
        }}
        onClick={handleAddFeedbackData}
      >
        Next
      </Button>
    </Box>
  );
};

export default FeedbackRating;
