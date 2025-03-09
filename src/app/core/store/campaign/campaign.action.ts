import { Campaign } from '@core/api';
import { Response } from '@core/api/api.model';
import { Action } from '@ngrx/store';

export enum CampaignActionTypes {

  GET_CAMPAIGN = '[Campaign] GET_CAMPAIGN',
  GET_CAMPAIGN_SUCCESS = '[Campaign] GET CAMPAIGN_SUCCESS',
  GET_CAMPAIGN_ERROR = '[Campaign] GET_CAMPAIGN_ERROR',
  SET_CAMPAIGN = '[Campaign] SET_CAMPAIGN'

}

export class GetCampaign implements Action {
  readonly type = CampaignActionTypes.GET_CAMPAIGN;
}

export class GetCampaignSuccess implements Action {
  readonly type = CampaignActionTypes.GET_CAMPAIGN_SUCCESS;
  constructor(public payload: Campaign[]) { }
}

export class GetCampaignError implements Action {
  readonly type = CampaignActionTypes.GET_CAMPAIGN_ERROR;
  constructor(public payload: Response<null>) { }
}

export class SetCampaign implements Action {
  readonly type = CampaignActionTypes.SET_CAMPAIGN;
  constructor(public payload: Campaign[]) { }
}

export type CampaignActions = GetCampaign | GetCampaignSuccess | GetCampaignError | SetCampaign;
