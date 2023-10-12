export type IconSurveryProps = {
  selectRating: React.Dispatch<React.SetStateAction<number | null>>;
};

export type Icon = {
  name: string;
  iconSource: string;
  value: number;
};

export enum SurveyStatusEnum {
  TERRBILE = 1,
  BAD = 2,
  OK = 3,
  GOOD = 4,
  AWESOME = 5,
}

export type SurveyStatus =
  | SurveyStatusEnum.TERRBILE
  | SurveyStatusEnum.BAD
  | SurveyStatusEnum.OK
  | SurveyStatusEnum.GOOD
  | SurveyStatusEnum.AWESOME;
