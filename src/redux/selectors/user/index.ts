export const selectUsers = (state: any) => state.usersList.users;
export const selectLoadingStatus = (state: any) => state.usersList.isLoading;
export const selectError = (state: any) => state.usersList.error;