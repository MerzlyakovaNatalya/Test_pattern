import "./App.css"
import { Header } from "./components/header"
import { Content } from "./components/content"
import { Footer } from "./components/footer"

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default App
