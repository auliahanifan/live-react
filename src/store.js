import createStore from "unistore";

export const store = createStore({
  email: "",
  full_name: "",
  is_login: null,
  api_key: "",
  keyword: "",
  values: [],
  avatar: ""
});

export const actions = store => ({
  setEmail(state, value) {
    return { email: value };
  },
  setName(state, value) {
    return { full_name: value };
  },
  setAvatar(state, value) {
    return { avatar: value };
  },
  setLogin(state, value) {
    return { full_name: value };
  },
  setKeyword: (state, value) => {
    return { keyword: value };
  },
  setValue: (state, value) => {
    return { values: value };
  },
  setApiKey: (state, value) => {
    return { api_key: value };
  }
});
