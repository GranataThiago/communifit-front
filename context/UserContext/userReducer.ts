import { UserState } from '.';

type UserActionType = 
| { type: '[USER] Login' }

export const userReducer = (state: UserState, action: UserActionType): UserState => {
      switch(action.type){
        case '[USER] Login':
          return {...state, isLogged: true};
        default: 
      return state;
    }
}