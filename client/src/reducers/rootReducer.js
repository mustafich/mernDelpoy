import { combineReducers } from "redux";
import { Login } from "./Login";
import { Registration } from "./Registration";
import { InputInfo } from "./infoInput";

const rootReducer = combineReducers({
    Registration:Registration,
    Login:Login,
    InputInfo:InputInfo,

});

export default rootReducer;