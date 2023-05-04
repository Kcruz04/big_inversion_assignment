import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"blonde"} >
      </PersonCard>
      <PersonCard firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"brown"} >
      </PersonCard>
      <PersonCard firstName = {"Ken"} lastName = {"Cruz"} age = {30} hairColor = {"brown"} >
      </PersonCard>
      <PersonCard firstName = {"Shari"} lastName = {"Johnson"} age = {21} hairColor = {"Black"} >
      </PersonCard>
      
    </div>
  );
}

export default App;
