import { Routes, Route } from "react-router-dom";
import Homepage from "@/components/Homepage";
//session2
import Session2 from "@/pages/session2/demo";
import Class from "@/pages/session2";
import FlipCoin from "@/pages/session2/practice/Flipcoin/Flipcoin";
import SearchProduct from "@/pages/session2/practice/SearchProducts/SearchProduct";
import RollDice from "@/pages/session2/practice/RollDice/RollDice";

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
      <Route path="/note" element={<Note />} />
    </Routes>
  );
}
