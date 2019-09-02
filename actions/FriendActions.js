import { ADD_FRIEND } from '../constants/index';

export const addFriend = friendIndex => (
    {
      type: ADD_FRIEND,
      payload: friendIndex,
    }
);