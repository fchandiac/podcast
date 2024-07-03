import React, { useReducer, createContext, useContext } from "react";
const AppContext = createContext();

const initialState = 
  {
    podcast: {
      title: "",
      description: "",
      date: "",
      duration: "",
      file: "",
      youtube: "",
      spotify: "",
    },
  }


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PODCAST":
      return {
        ...state,
        podcast: action.payload,
      };

    default:
      return state;
  }
};

const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setPodcast = (podcast) => {
    console.log("podcast", podcast);
    dispatch({ type: "SET_PODCAST", payload: podcast });
  }

  return (
    <AppContext.Provider
      value={{
        podcast: state.podcast,
        dispatch,
        setPodcast,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
