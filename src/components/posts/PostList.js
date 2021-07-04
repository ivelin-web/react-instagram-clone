import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import db from "../../firebase";

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((post) => {
                        return {
                            id: post.id,
                            ...post.data(),
                        };
                    })
                );
            });
    }, []);

    return (
        <section>
            {posts.map((post) => {
                return <Post key={post.id} Avatar={Avatar} {...post} />;
            })}
        </section>
    );
}
