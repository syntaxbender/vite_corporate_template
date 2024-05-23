import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./src/components/header/headerSlice.jsx"
import topMenuReducer from "./src/components/topMenu/topMenuSlice.jsx"
//import mobMenuReducer from './components/mobileMenu/mobMenuSlice.jsx';
export const store = configureStore({
    reducer: {
    //   mobMenu: mobMenuReducer,
    //   topMenu: topMenuReducer,
       header: headerReducer,
       topMenu: topMenuReducer,
    //   home: homeReducer,
      //components: componentsReducer,
    },
  });
