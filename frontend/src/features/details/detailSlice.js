import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import detailService from "./detailService";


const initialState = {
  details: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

//create new detail
export const createDetail = createAsyncThunk('detail/create', async (detailData, thunkAPI) => {
    try {
        const token=thunkAPI.getState().auth.user.token
        return await detailService.createDetail(detailData, token)
    } catch (error) {
        const message =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();
				return thunkAPI.rejectWithValue(message);
    }
})

// Get user details
export const getDetails = createAsyncThunk(
  'details/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await detailService.getDetails(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user detail
export const deleteDetail = createAsyncThunk(
  'details/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await detailService.deleteDetail(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


export const detailSlice = createSlice({
	name: "detail",
	initialState,
	reducers: {
		reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createDetail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createDetail.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.details.push(action.payload)
            })
            .addCase(createDetail.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.details = action.payload
            })
            .addCase(getDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteDetail.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteDetail.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.details = state.details.filter(
                    (detail) => detail._id !== action.payload.id
              )
            })
            .addCase(deleteDetail.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
});

export const { reset } = detailSlice.actions;
export default detailSlice.reducer;
