import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("covidSlice/getData", async (country) => {
    if (country === "Global") {
      const res = await axios.get("https://covid19.mathdro.id/api");
      return res.data;
    } else {
      const res = await axios.get(
        `https://covid19.mathdro.id/api/countries/${country}`
      );
      return res.data;
    }
  }
);

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    country: "",
    items: {
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      active: 0,
      lastUpdate: "",
      country: [],
    },
    isLoading: false,
  },
  reducers: {
    getCountry: (state, action) => {
      state.country = action.payload;
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.items.confirmed = action.payload.confirmed.value;
      state.items.recovered = action.payload.recovered.value;
      state.items.deaths = action.payload.deaths.value;
      state.items.active =
        state.items.confirmed - state.items.recovered - state.items.deaths;
      state.items.lastUpdate = action.payload.lastUpdate;
      state.items.name = action.payload;
      state.isLoading = false;
    },
    [getData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCountry } = covidSlice.actions;
export const country = (state) => state.covid.country;
export default covidSlice.reducer;
