import './App.css'
import SlowComponent from './SlowComponent'
import ButtonWithModal from './ButtonWithModal';
import RefactorComponents from './RefactorComponents';
function App() {


  
  return (
      <>
      <RefactorComponents>
        <>
        <div>
        Something Done Here
      </div>
      <ButtonWithModal/>
      <div>
        Something Done Here
      </div>
      <SlowComponent/>
        </>
      </RefactorComponents>
      </>
      
  )
}

export default App
