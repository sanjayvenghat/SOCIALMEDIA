const Post = ({ settitle, setfeed, setarr, handle }) => {
  return (
    <div className="Post">
      <label>
        <h2>Title</h2>
      </label>
      <textarea
        className="texify"
        onChange={(e) => settitle(e.target.value)}
      ></textarea>
      <label>
        <h2>Feed</h2>
      </label>
      <textarea
        className="texify"
        onChange={(e) => setfeed(e.target.value)}
      ></textarea>
      <div>
        <button className="btn" onClick={() => handle()}>
          Submit
        </button>{" "}
      </div>
    </div>
  );
};

export default Post;
