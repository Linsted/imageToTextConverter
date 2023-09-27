import Button from "./components/Button/Button";
import BUTTON_TYPES from "./components/Button/constants";

function App() {
  return (
    <div>
      <Button text="Submit" buttonType={BUTTON_TYPES.SUBMIT} />
    </div>
  );
}

export default App;
