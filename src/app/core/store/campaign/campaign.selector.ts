import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CampaignState } from "./campaign.reducer";

export const campaignState = createFeatureSelector<CampaignState>('campaign');

export const getCampaigns = createSelector(
  campaignState,
  (state: CampaignState) => state.campaigns
)
