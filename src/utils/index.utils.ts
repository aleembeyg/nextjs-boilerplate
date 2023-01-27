export enum APIStatus {
  idle = "idle",
  pending = "pending",
  success = "success",
  failure = "failure",
}

export const createAction = (type: string = "", payload: any = null) => ({
  type,
  payload,
});

export const errorInfo = (error: any) => error.message;
