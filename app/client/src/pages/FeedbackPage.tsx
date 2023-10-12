import { useState, useEffect } from "react";
import Container from "../container/Container";
import FeedbackSurvey from "../features/feedback/FeedbackRating";
import {
  Feedback,
  FeedbackTemplate,
} from "../features/feedback/FeedbackRating.type";

const feedbacksTemplates: FeedbackTemplate[] = [
  {
    type: "service",
    question: "How was your experience?",
  },
  {
    type: "order",
    question: "How was your order?",
  },
];

const FeedbackPage = () => {
  const [persistData, setPersistData] = useState<Feedback[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const persistFeedbackData = localStorage.getItem("feedback");

  useEffect(() => {
    if (persistFeedbackData) {
      //Tranform data type from string to array
      const transformDataType: any = JSON.parse(
        JSON.parse(persistFeedbackData)
      );
      setPersistData(transformDataType);

      //customer answer 1 question than off
      if (transformDataType.length < feedbacksTemplates.length) {
        setCurrentPage(transformDataType.length);
      }
      //customer answer all but not finish
      else if (transformDataType.length === feedbacksTemplates.length) {
        setCurrentPage(transformDataType.length - 1);
      }
    }
  }, [currentPage, persistFeedbackData]);

  const nextPageHandler = (num: number) => {
    setCurrentPage(currentPage + num);
  };

  const prevPageHandler = (num: number) => {
    setCurrentPage(currentPage - num);
  };

  return (
    <Container>
      <FeedbackSurvey
        currentPage={currentPage}
        nextPage={nextPageHandler}
        prevPage={prevPageHandler}
        templates={feedbacksTemplates}
        data={persistData}
        index={persistData.length - 1}
      />
    </Container>
  );
};

export default FeedbackPage;
