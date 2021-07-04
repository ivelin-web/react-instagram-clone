import React, { Suspense } from "react";
import "./App.css";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import { useStateValue } from "./StateProvider";

const Login = React.lazy(() => import("./pages/Login"));
const Stories = React.lazy(() => import("./components/stories/Stories"));
const PostInput = React.lazy(() => import("./components/posts/PostInput"));
const PostList = React.lazy(() => import("./components/posts/PostList"));

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <Suspense fallback={""}>
            {user ? (
                <>
                    <Header />
                    <main className="my-container py-8 flex justify-center xl:justify-between">
                        <section style={{ maxWidth: 620 }}>
                            <Stories />
                            <PostInput />
                            <PostList />
                        </section>
                        <Sidebar />
                    </main>
                </>
            ) : (
                <Login />
            )}
        </Suspense>
    );
}

export default App;
