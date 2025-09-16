import { BsFillCalendarFill } from 'react-icons/bs'
import Like from './components/Like';
function App(){

  return (
    <div>
        <Like onClick={()=> console.log('Click')}/>
    </div>
  );
}

export default App;