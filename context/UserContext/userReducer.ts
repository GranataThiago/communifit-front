import { UserState } from '.';
import { User } from '../../interfaces/user';

type UserActionType = 
| { type: '[USER] Login', payload: { token: string, user: User } }

export const userReducer = (state: UserState, action: UserActionType): UserState => {
      switch(action.type){
        case '[USER] Login':
          return {...state, ...action.payload };
        default: 
      return state;
    }
}