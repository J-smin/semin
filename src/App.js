import "./App.css";
//한 페이지에 여러 컴포넌트 배치 또는 출력시에는 반드시 라우터 사용해야 함
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//react-router-dom에서 BrowserRouter, Route,Switch를 import하는데 BrowserRouter는 Router로 사용하겠다.
//이 페이지에 보여지게 할 컴포넌트를 임포트함
import ListBoardComponent from "./components/board/ListBoardComponent";
import HeaderComponent from "./components/common/header";
import FooterComponent from "./components/common/footer";
import CreateBoardComponent from "./components/board/CreateBoardComponent";
import ReadBoardComponent from './components/board/ReadBoardComponent'; 


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListBoardComponent />}></Route>
            <Route path="/boards" element={<ListBoardComponent />}></Route>
            <Route path="/create-board/:boardNum" element = {<CreateBoardComponent/>}></Route>
            <Route path ="/read-board/:boardNum" element = {<ReadBoardComponent/>}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
