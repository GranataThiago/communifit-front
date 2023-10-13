import { UserState } from '.';
import { User } from '../../interfaces/user';

type UserActionType = 
| { type: '[USER] Login', payload: { token: string, user: User | null} }
| { type: '[USER] Logout' }

export const userReducer = (state: UserState, action: UserActionType): UserState => {
      switch(action.type){
        case '[USER] Login':
          return {...state, ...action.payload };
        case '[USER] Logout':
          return {...state, token: null, user: null};
        default: 
      return state;
    }
}