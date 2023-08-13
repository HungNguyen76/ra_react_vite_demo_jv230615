import { Routes, Route } from "react-router-dom";
import Homepage from "@/components/Homepage";
//session2
import Class from "@/pages/session2";
import Session2 from "@/pages/session2/demo";
import FlipCoin from "@/pages/session2/practice/Flipcoin/Flipcoin";
import SearchProduct from "@/pages/session2/practice/SearchProducts/SearchProduct";
import RollDice from "@/pages/session2/practice/RollDice/RollDice";

//session3
import Session3 from "@/pages/session3/demo";
import LifeCycle from "@/pages/session3";
import Form from "@/pages/session3/practice/Forms/Form";

//session4
import Hooks from "@/pages/session4";
import Session4 from "@/pages/session4/demo";
import UseState from "@/pages/session4/practice/UseState";
import UseEffect from "@/pages/session4/practice/UseEffect";
import UseCallback from "@/pages/session4/practice/UseCallback";
import UseReducer from "@/pages/session4/practice/UseReducer";
import UseMemo from "@/pages/session4/practice/UseMemo";
import UseRef from "@/pages/session4/practice/UseRef";
import Parent from "@/pages/session4/practice/UseContexts/Parent";

//session5
import Session5 from "@/pages/session5";
import UIFrame from "@/pages/session5/demo";
import HomePage from "@/pages/session5/practice/template/Homepage";

//note
import Note from "@/components/Note";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/session2" element={<Class />} />
      <Route path="/session2/stateProps" element={<Session2 />} />
      <Route path="/session2/practice/flipCoin" element={<FlipCoin />} />
      <Route path="/session2/practice/rollDice" element={<RollDice />} />
      <Route
        path="/session2/practice/searchForms"
        element={<SearchProduct />}
      />
      <Route path="/session3" element={<LifeCycle />} />
      <Route path="/session3/lifeCycle" element={<Session3 />} />
      <Route path="/session3/loginForm" element={<Form />} />

      <Route path="/session4" element={<Hooks />} />
      <Route path="/session4/hooks" element={<Session4 />} />
      <Route path="/session4/hooks/useState" element={<UseState />} />
      <Route path="/session4/hooks/useEffect" element={<UseEffect />} />
      <Route path="/session4/hooks/useReducer" element={<UseReducer />} />
      <Route path="/session4/hooks/useMemo" element={<UseMemo />} />
      <Route path="/session4/hooks/useCallback" element={<UseCallback />} />
      <Route path="/session4/hooks/useContext" element={<Parent />} />
      <Route path="/session4/hooks/useRef" element={<UseRef />} />

      <Route path="/session5" element={<Session5 />} />
      <Route path="/session5/uiFramework" element={<UIFrame />} />
      <Route path="/session5/uiFramework/layout" element={<HomePage />} />

      <Route path="/note" element={<Note />} />
    </Routes>
  );
}
