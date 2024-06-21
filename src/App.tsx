import "./App.css";
import { Greet } from "./components/Greet"
import { Person} from "./components/Person"
import { PersonList } from "./components/PersonList"
import { Status} from "./components/Status"
import { Heading } from "./components/Heading"
import { Oscar } from "./components/Oscar"

function App() {
  const personName = {
    first: "Caricia",
    last: "Briones"
  }

  const names = [
    {
      first: "Jemimah",
      last: "Briones"
    },
    {
      first: "Charbel",
      last: "Briones"
    },
    {
      first: "Catherine",
      last: "Briones"
    }
  ]

  return (
    <div className="App">
        <Greet name={"Benito"} messageCount={15} isLoggedIn={true}/>
        <Person name={personName}/>
        <PersonList names={names}/>
        <Status status={"error"}/>
        <Heading>Placeholder Text bro</Heading>
      <Oscar>
        <Heading>Oscar goes to Franz-Che Briones</Heading>
      </Oscar>
      <Greet name={"Claudia"} isLoggedIn={true} />
    </div>
  );
}

export default App;
