import { createStore } from "vuex";
import account from "./modules/account";

export default createStore({
	modules: {
		account
	}
})