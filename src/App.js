import {Route, Routes} from "react-router-dom";

import {CommentsPage, NotFoundPage, PostCommentsPage, AlbumsPage, HomePage, TodosPage} from "./pages";

import {MainLayout} from "./layouts";
import {RouterEndpoints} from "./routes";



const App = () => {
    return (
        <div>
            <Routes>
                <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                    <Route path={RouterEndpoints.index} element={<HomePage/>}/>
                    <Route path={RouterEndpoints.todos} element={<TodosPage/>}/>
                    <Route path={RouterEndpoints.albums} element={<AlbumsPage/>}/>
                    <Route path={RouterEndpoints.comments} element={<CommentsPage/>}>
                        <Route path={RouterEndpoints.postId} element={<PostCommentsPage/>}/>
                    </Route>
                </Route>
                <Route path={RouterEndpoints.notFound} element={<NotFoundPage/>}/>
            </Routes>
        </div>

    );
}
// g
export default App;
