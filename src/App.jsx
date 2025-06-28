import BrowserRouter from "./BrowserRouter.jsx";
import Route from "./Route.jsx";
function App() {

  return (
    <>
      <BrowserRouter>
          <h2>Browser Router</h2>
          <Route path="/1">
              <h3>Route 1</h3>
              <a href="/2">Go to route 2</a>
          </Route>
          <Route path="/2">
              <h3>Route 2 </h3>
          </Route>
      </BrowserRouter>
    </>
  )
}

export default App
