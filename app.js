import React, { useEffect, useState } from "react";
import { prepr } from "./services/prepr";

function App() {
 const [posts, setPosts] = useState([]);

 async function fetchPosts() {
   const data = await prepr
     .graphqlQuery(
       `{
           posts: Posts {
             items {
                 title
             }
         }
       }`
     )
     .fetch();

   setPosts(data.data.posts.items);
 }

 useEffect(() => {
   fetchPosts();
 }, []);

 useEffect(() => {
   console.log(posts);
 }, [posts]);

 return <div className="App"></div>;
}

export default App;