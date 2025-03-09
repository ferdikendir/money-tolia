import { Campaign } from "@core/api";
import { CampaignActionTypes, CampaignActions } from "./campaign.action";

export interface CampaignState {
  campaigns: Campaign[];
  error: string;
}

export const initialState: CampaignState = {
  campaigns: [],
  error: ''
};

export function campaignReducer(state: CampaignState | undefined = initialState, action: CampaignActions): CampaignState {
  switch (action.type) {
    case CampaignActionTypes.GET_CAMPAIGN:
      return {
        ...state
      };
    case CampaignActionTypes.GET_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaigns: action.payload
      };
    case CampaignActionTypes.GET_CAMPAIGN_ERROR:
      return {
        ...state,
        campaigns: [],
        error: action.payload.message
      };
    case CampaignActionTypes.SET_CAMPAIGN:
      return {
        ...state,
        campaigns: action.payload
      };
    default:
      return {
        ...state
      };
  }
}
