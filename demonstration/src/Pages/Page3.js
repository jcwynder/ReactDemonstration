import { useState } from "react";
import FormInput from "../Components/FormInput.js";
import CustomSelect from "../Components/CustomSelect.js";
import ToggleSwitch from "../Components/ToggleSwitch.js";
import Button from "../Components/Button.js";
import "../styles.css";

function Page3() {
  const data = [
    {
      id: "1",
      name: "One",
    },
    {
      id: "2",
      name: "Two",
    },
    {
      id: "3",
      name: "Three",
    },
    {
      id: "4",
      name: "Four",
    },
  ];

  const [isShown, setIsShown] = useState(false);

  function handleChange(event) {
    console.log(event.target.value);
  }
  function onSelectChange(event) {
    console.log(event.target.value);
  }
  function onToggleChange(event) {
    console.log(event.target.checked);
  }
  return (
    <div
      className="App"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <h2>Component Showcase</h2>
      {isShown && (
        <div>I'll appear when you hover over the div element below.</div>
      )}
      <form>
        <FormInput type={"text"} onChange={handleChange} />
        <FormInput type={"email"} onChange={handleChange} />
        <div>
          <CustomSelect data={data} onSelectChange={onSelectChange} />
        </div>
        <div>
          <ToggleSwitch
            id="id"
            defaultChecked={false}
            disabled={false}
            Text={["Yes", "No"]}
            onToggleChange={onToggleChange}
          />
        </div>
        <Button variant="danger" size={"sm"}>
          Small Button
        </Button>
        <Button variant="primary" size={"lg"}>
          Smaller Button
        </Button>
        <Button variant="warning" size={"xs"}>
          Big Button
        </Button>
      </form>
    </div>
  );
}

export default Page3;
