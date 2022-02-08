import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Definitions from "./components/Definitions";
function App() {
  const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
];
  return (
    <div className="App">
      <Card1 />
      <Card2 title="Hi" />
      <Card2 text="how are you?" />
      <Card2 title="Hi" text="how are you?" />

      <Definitions data={definitions} />
    </div>
  );
}

export default App;
