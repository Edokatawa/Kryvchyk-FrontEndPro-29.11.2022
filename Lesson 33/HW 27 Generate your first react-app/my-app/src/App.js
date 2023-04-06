import "./App.css";
import Header from "./components/Header/Header";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
    return (
        <>
            <Header />
            <div className="app-body">
                <LeftSidebar />
                <MainContainer />
            </div>
        </>
    );
}

export default App;
