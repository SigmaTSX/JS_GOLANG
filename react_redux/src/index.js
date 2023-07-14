import React from "react"
import { createRoot } from "react-dom/client"
import { createStore} from "redux"
import { Provider } from "react-redux"
import reducer from "./reducer"
import App from "./components/app"

const story = createStore(reducer)
  createRoot(document.getElementById("root")).render(
    <Provider store={story}>
      <App />
    </Provider>
  )

