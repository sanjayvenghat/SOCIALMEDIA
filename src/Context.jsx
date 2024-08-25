import { Link } from "react-router-dom";
const Context = ({ posts }) => { 
  console.log(posts)
  return (
    <div className="context">
      {posts.map((val) => (
        <div className="home">
          <Link className="linklink" to={`/delete/${val.id}`}> 
            <h2>{val.title}</h2> 
          </Link> 
          <p>{val.date}</p>
          <p>{val.content}</p>   
        </div>
      ))}
    </div>
  );
};

export default Context;
