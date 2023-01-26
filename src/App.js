import {Route, Routes} from "react-router-dom";

import {Header} from "./components";

import HomePage from "./pages/HomePage/HomePage";
import TodosPage from "./pages/TodosPage/TodosPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";


const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Routes>
        </div>

    );
}

export default App;
