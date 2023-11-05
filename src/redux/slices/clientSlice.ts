
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {fetchClient} from '@api/apiUser.js'

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
    nroCell:'',
    polPriv:false,
    polCom:false,
    plan:'',
    price:''
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
      const { tipoDoc, nroDoc, nroCell, polPriv, polCom} = action.payload
      state.client.tipoDoc = tipoDoc;
      state.client.nroDoc = nroDoc
      state.client.nroCell = nroCell
      state.client.polPriv = polPriv
      state.client.polCom = polCom
    },
    addResumen: (state, action) => {
      const {name,price} = action.payload
      state.client.plan = name;
      state.client.price = price
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

export const { addClient,addInfo,addResumen } = clientSlice.actions
export default clientSlice.reducer;


