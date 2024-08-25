import Header from "./Header";
import "./App.css";
import Search from "./Search";
import { useEffect, useState } from "react";
import Post from "./Post";
import Context from "./Context";
import { useNavigate } from "react-router-dom";
import Del from "./Del";
import Missing from "./Missing";
import { Routes, Route } from "react-router-dom";
import About from "./About"; 
import Rotate from "./Rotate"; 

import Edit from "./Edit";
const App = () => {
  let [title, settitle] = useState("");
  let [feed, setfeed] = useState("");
  let [arr, setarr] = useState([]);
  let [search, setsearch] = useState(""); 
  let[yes,setyes]=useState(true);
  let navigate = useNavigate();
  useEffect(()=>{ 
    
    
    setTimeout(() => { 
      setyes(true)
    }, 4000); 
   
  },[])
  function handle() {
    let id = arr.length ? Number(arr[arr.length - 1].id) + 1 : 1;
    let titles = title; 
     alert(id)
    if (title==="") 
      {
        
        alert('enter the title') 
        navigate('/') 
        return 
      }
    let feeds = feed.slice(0,25);
    console.log(feeds.length)
  
    let date = new Date().toString();
    let objs = { id: String(id), title: titles, date: date, content: feeds };
    let new_arr = [...arr, objs];  
  
    setarr(new_arr);
    settitle("");
    setfeed("");
    navigate("/");
  }
  let nav = useNavigate();
  function handleDelete(vaks) {
    let filters = arr.filter((val) => val.id !== vaks);
    setarr(filters); 
    
    nav("/");
  }
  return (
    <div>
      <Header />
      <search className="search">
        <Search search={setsearch} />
      </search>
     {yes===false && <Rotate/>}
      <Routes>
        <Route
          path="/"
          element={
           yes && <Context
              posts={arr.filter((val) => {
                return val.title.toLowerCase().includes(search.toLowerCase());
              })}
            />
          }
        />
        <Route
          path="/post"
          element={
            <Post
              settitle={settitle}
              setfeed={setfeed}
              setarr={setarr}
              handle={handle}
            />
          }
        />
        <Route
          path="/delete/:ids"
          element={<Del arr={arr} handleDelete={handleDelete} 
           />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />  
        <Route path="/edit/:id" element={<Edit arr={arr} setarr={setarr}/>}/>
      </Routes>
    </div>
  );
};

export default App;