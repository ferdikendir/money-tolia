import moment from "moment";

export interface Campaign {
  header: string;
  description: string;
  score: number;
  campaignDate: moment.Moment;
}
