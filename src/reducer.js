import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, ...action.payload };

    case SET_STORIES:
      return { ...state, ...action.payload };

    case REMOVE_STORY:
      const newHits = state.hits.filter(
        (story) => story.objectID !== action.payload
      );

      return { ...state, hits: newHits };

    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 };

    case HANDLE_PAGE:
      let newPage = action.payload === "inc" ? state.page + 1 : state.page - 1;

      if (newPage < 0) newPage = state.nbPages - 1;

      if (newPage > state.nbPages - 1) newPage = 0;

      return {
        ...state,
        page: newPage,
      };

    default:
      throw new Error(`No matching "${action.type}" action type `);
  }
};

export default reducer;
