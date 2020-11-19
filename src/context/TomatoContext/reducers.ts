import { ITomatoContextState } from "./index";

export enum ReducerActionTypes {
  SET_CURRENT_SESSION = "CREATE_PRODUCT",
  SET_COMPLETED_SESSIONS = "DELETE_PRODUCT",
  SET_TOTAL_SESSIONS = "ADD_PRODUCT",
}

type ReducerActionPayload = {
  [ReducerActionTypes.SET_CURRENT_SESSION]: number;
  [ReducerActionTypes.SET_COMPLETED_SESSIONS]: number;
  [ReducerActionTypes.SET_TOTAL_SESSIONS]: number;
};

type ReducerActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: { type: Key; payload: M[Key] };
};

export type ReducerActions = ReducerActionMap<
  ReducerActionPayload
>[keyof ReducerActionMap<ReducerActionPayload>];

export const tomatoContextReducer = (
  state: ITomatoContextState,
  action: ReducerActions
) => {
  switch (action.type) {
    case ReducerActionTypes.SET_CURRENT_SESSION:
      return { ...state, currentSession: action.payload };
    case ReducerActionTypes.SET_COMPLETED_SESSIONS:
      return { ...state, completedSessions: action.payload };
    case ReducerActionTypes.SET_TOTAL_SESSIONS:
      return { ...state, totalSessions: action.payload };
    default:
      return state;
  }
};
