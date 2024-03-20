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
      <Collapsable title="Obligations" showGeneralTable={true} />
      <Collapsable title="Personal" showGeneralTable={true} />
      <Collapsable title="Savings" showGeneralTable={true} />
      <Collapsable title="Summary" showGeneralTable={false} />
    </div>
  );
}

export default App;
