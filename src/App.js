import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import TodosPage from "./pages/TodosPage/TodosPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import {NotFoundPage} from "./pages";

import {MainLayout} from "./layouts";
import {PostComments} from "./components";



const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'comments/:commentsID'} element={<PostComments/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>

    );
}

export default App;
