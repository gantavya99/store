import cartSlice from './cartSlice';
const {createSlice}= require ('@reduxjs/toolkit');


const countSlice= createSlice({
    name:'count',
    initialState : 0,
    reducers:{
        increment(state){
            return state+1
        },
    }

});
export const {increment}=countSlice.actions;
export default countSlice.reducer;