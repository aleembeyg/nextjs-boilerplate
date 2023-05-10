export enum APIStatus {
  idle = "idle",
  pending = "pending",
  success = "success",
  failure = "failure",
}

export enum rating {
  "01" = "Bad",
  "02" = "Poor",
  "03" = "Average",
  "04" = "Good",
  "05" = "Excellent"
}

export const createAction = (type: string = "", payload: any = null) => ({
  type,
  payload,
});

export const errorInfo = (error: any) => error.message;
