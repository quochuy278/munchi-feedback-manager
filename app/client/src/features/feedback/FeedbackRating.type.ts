import { SurveyStatus } from "../../component/IconRating/IconRating.type";

export type Feedback = {
  type: FeedbackAvailable;
  data: FeedbackData;
};

export type FeedbackData = {
  feedbackRatings: SurveyStatus;
  chipComments: string[];
  additionalComment: string
};

export type FeedbackTemplate = {
  type: FeedbackAvailable;
  question: string;
};

export type FeedbackAvailable = "service" | "order" | "decoration";
