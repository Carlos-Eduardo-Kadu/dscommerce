import { BrowserRouter, Route, Routes } from "react-router-dom"
import ClientHome from "./routes/ClientHome"
import Catalog from "./routes/ClientHome/Catalog"
import ProduticDetails from "./routes/ClientHome/ProduticDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product-details" element={<ProduticDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
