
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {fetchClient} from '../../api/apiUser.js'

export const fetchDataClient = createAsyncThunk('dataclient', async () => {
  const dataClient = await fetchClient()
  return dataClient
})

const initialState = {
  status: 'loading',
  client: {
    name: '',
    lastName: '',
    birthDay: '',
    tipoDoc: '',
    nroDoc: '',
    nroCell:''
  }
}

export const clientSlice = createSlice({
  name: "dataclient",
  initialState,
  reducers: {
    addClient: (state, action) => {
      const {name,lastName,birthDay} = action.payload
      state.client.name = name;
      state.client.lastName = lastName;
      state.client.birthDay = birthDay
    },
    addInfo: (state, action) => {
      const {tipoDoc,nroDoc,nroCell} = action.payload
      state.client.tipoDoc = tipoDoc;
      state.client.nroDoc = nroDoc
      state.client.nroCell = nroCell
    },
  },
/*   extraReducers: (builder) => {
    builder
      .addCase(fetchDataClient.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDataClient.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.client = action.payload
      })
  } */
})

export const { addClient,addInfo } = clientSlice.actions
export default clientSlice.reducer;


