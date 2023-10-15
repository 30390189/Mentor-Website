import {configureStore} from "@reduxjs/toolkit"
import { loginstate } from "./login /loginstate";

const store = configureStore ({
    reducer:{
        loginstate: loginstate.reducer

    }
})

export default store;