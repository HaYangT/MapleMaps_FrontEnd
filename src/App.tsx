import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import './App.css';


function App() {
  const [character,setCharacter] = useState<any>(null);
  const handleSearch = (nickname : string) => {
    console.log("닉네임 : ", nickname);
  }


  return (
    <div className="App">
      <h1>메이플 맵스</h1>
      <SearchBar/> 
    </div>
  );
}

export default App;
