
export interface BaseResponse {
    success: boolean;
    errorCode: string;
    message: string;
    url: string;
    resultMessage: ResultMessage;
}

export interface Response<T> extends BaseResponse {
    data: T;
}

export enum ResultMessageTypes {
    SUCCESS = '1',
    ERROR = '2',
    WARNING = '3',
    INFO = '4',
    NONE = '5'
}

export interface ResultMessageType {
    resultMessageTypeId: ResultMessageTypes;
    name: string;
    createdOn?: any;
    readOnlyFlag: boolean;
}

export interface ResultMessage {
    resultMessageId: string;
    message: string;
    resultMessageTypeId: ResultMessageTypes;
    code: string;
}