import { Provider } from "react-redux";
import { createStore } from "redux";
import ReactDOM from "react-dom";

import App from "./App";
import reducer from "./reducer";

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
