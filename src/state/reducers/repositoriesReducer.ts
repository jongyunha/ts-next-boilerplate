import produce from 'immer';

import { ActionType } from '../action-type';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action,
): RepositoriesState => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionType.SEARCH_REPOSITORIES:
        draft.loading = true;
        draft.data = [];
        draft.error = null;
        break;
      case ActionType.SEARCH_REPOSITORIES_SUCCESS:
        draft.loading = false;
        draft.data = action.payload;
        draft.error = null;
        break;
      case ActionType.SEARCH_REPOSITORIES_ERROR:
        draft.loading = false;
        draft.data = [];
        draft.error = action.payload;
      default:
        return state;
    }
  });
};

export default reducer;
