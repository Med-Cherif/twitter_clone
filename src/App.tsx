import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Rightbar from "./Components/Rightbar";
import OpenSidebarButton from "./Components/Sidebar/OpenSidebarButton";

function App() {

    return (
        <div className="App min-h-screen bg-white dark:bg-gray-900">
            <div className="lg:container mx-auto px-2 md:px-4">
                <div className="md:grid lg:grid-cols-[200px_1fr_350px] md:grid-cols-[auto_1fr] gap-5">
                  <Sidebar />
                  <Main />
                  <Rightbar />
                </div>
                <OpenSidebarButton />
            </div>
        </div>
    );
}

export default App;
