import "./App.css";
import { Greet } from "./components/Greet"
import { Person} from "./components/Person"
import { PersonList } from "./components/PersonList"
import { Status} from "./components/Status"
import { Heading } from "./components/Heading"
import { Oscar } from "./components/Oscar"
import { Button} from "./components/Button"
import { Input} from "./components/Input"
import { Container } from "./components/Container"

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
        <Button
            handleClick={(event, id) => console.log("Button clicked", event)}
            handleClick2={(event, id) => console.log("Button clicked too", event)}
        />
        <Input value={""} handleChange={event => console.log(event)}/>
        <Container styles={{border: "1px solid black", padding: "1rem"}}>
          <Heading>Text goes here</Heading>
        </Container>
    </div>
  );
}

export default App;
