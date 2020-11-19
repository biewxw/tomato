import React, { createContext, useReducer } from "react";
import { tomatoContextReducer, ReducerActions } from "./reducers";

export interface ITomatoContextState {
  totalSessions: number;
  currentSession: number;
  completedSessions: number;
}

const initialState: ITomatoContextState = {
  totalSessions: 0,
  currentSession: 0,
  completedSessions: 0,
};

const TomatoContext = createContext<{
  state: ITomatoContextState;
  dispatch: React.Dispatch<ReducerActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const TomatoContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(tomatoContextReducer, initialState);

  return (
    <TomatoContext.Provider value={{ state, dispatch }}>
      {children}
    </TomatoContext.Provider>
  );
};

export { TomatoContext, TomatoContextProvider };
