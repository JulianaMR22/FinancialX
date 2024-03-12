import DropDownYear from "./components/DropDownYear";
import DropDownMonth from "./components/DropDownMonth";
import Collapsable from "./components/Collapsable";

import "./App.css";

function App() {
  return (
    <div className="main__container">
      <div className="dropdowns">
        <DropDownYear />
        <DropDownMonth />
      </div>
      <Collapsable title="Obligations" />
      <Collapsable title="Personal" />
      <Collapsable title="Savings" />
      <Collapsable title="Summary" />
    </div>
  );
}

export default App;
