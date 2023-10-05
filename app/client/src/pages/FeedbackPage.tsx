import Container from "../container/Container";
import FeedbackSurvey from "../features/feedback/FeedbackSurvey";

const FeedbackPage = () => {
  return (
    <Container>
      <FeedbackSurvey question="How was your experience?" />
    </Container>
  );
};

export default FeedbackPage;
