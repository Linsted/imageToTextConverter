import Button from "./components/Button/Button";
import BUTTON_TYPES from "./components/Button/constants";
import Input from "./components/Input/Input";

function App() {
  return (
    <div>
      <Button text="Submit" buttonType={BUTTON_TYPES.SUBMIT} />
      <Input
        label="testLabel"
        name="testName"
        type="testType"
        accept="image/png, image/jpeg"
      />
    </div>
  );
}

export default App;
