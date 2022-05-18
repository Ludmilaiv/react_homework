import { TOGGLE_PROFILE, CHANGE_NAME } from './actions';
import { Reducer } from 'redux';
import { ProfileActions } from './types';

export interface ProfileState {
  visible: boolean;
  name: string;
}

const initialState: ProfileState | undefined = {
  visible: true,
  name: 'default name',
};

export const profileReducer: Reducer<ProfileState, ProfileActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TOGGLE_PROFILE: {
      console.log(state.visible);
      return {
        ...state,
        visible: !state.visible,
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    default:
      return state;
  }
};
