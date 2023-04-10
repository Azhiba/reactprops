import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Bio from './components/Bio';
import FullName from './components/FullName';
import Profession from './components/Profession';

       function App() {
   
const handlealert =(x)=>alert(x);
  return (
    <>
    
      <FullName firstName="Hiba" lastName="Azzouz">
      </FullName>
      <br/>
      <div style={{ marginTop:"20px",}} id="about">
      <Bio FullName="Hiba Azouz" Age="27" Gender="Female" Interests="Sport, Watching TV , Eating and Sleeping"  />
      </div>
      <br/>
       <div style={{ marginTop:"20px",}} id="job"> 
      <Profession    handlealert={handlealert}/>
      </div>
    
  
    </>
  );
}
export default App;

 
