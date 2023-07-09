import { UserState } from '.';
import { User } from '../../interfaces/user';

type UserActionType = 
| { type: '[USER] Login', payload: User }

export const userReducer = (state: UserState, action: UserActionType): UserState => {
      switch(action.type){
        case '[USER] Login':
          return {...state, isLogged: true, user: action.payload};
        default: 
      return state;
    }
}