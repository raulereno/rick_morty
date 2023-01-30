import { createSlice } from '@reduxjs/toolkit';
import { UserEmptyState } from '../../models';


export const userSlice = createSlice({
  name: 'character',
  initialState: UserEmptyState,
  reducers: {
    createUser: (state,action) => {
      return action.payload
    },
    modifyUser: (state,action) => {
      const formattedData ={...state,...action.payload}
      return formattedData
    },
    resetUser:()=>{
        return UserEmptyState
    }
  },
})

// Action creators are generated for each case reducer function
export const { createUser, modifyUser, resetUser } = userSlice.actions

export default userSlice.reducer