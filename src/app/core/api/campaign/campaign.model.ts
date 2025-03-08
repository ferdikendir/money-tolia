import moment from "moment";

export interface Campaign {
  id: number;
  header: string;
  description: string;
  score: number;
  campaignDate: moment.Moment;
}
