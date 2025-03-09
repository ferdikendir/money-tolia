import { ActionReducerMap } from "@ngrx/store";
import {
  CampaignActions,
  CampaignState, campaignReducer
} from "./campaign";

export const appReducer: ActionReducerMap<{ campaign: CampaignState }, CampaignActions> = {
  campaign: campaignReducer
};
