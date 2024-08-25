import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Edit = ({ arr, setarr }) => {
  const { id } = useParams();
  let filter = arr.filter((val) => Number(val.id) === Number(id));
  let secondfilter = arr.filter((val) => Number(val.id) !== Number(id));
  const [name, setName] = useState(filter[0].title);
  const [desc, setDesc] = useState(filter[0].content);
  let navi = useNavigate();
  function handles() {
    let data = { ...filter[0], content: desc, title: name };
    let storage = [...secondfilter, data];
    console.log(storage);
    setarr(storage);
    navi("/");
  }

  return (
    <div className="editing">
      <label>
        <h2>Title</h2>
        <div className="length">
          <p></p>
          {name.length >= 30 ? (
            <p>maximum limit obtained</p>
          ) : (
            <p>charecters Left {30 - name.length}</p>
          )}
        </div>
      </label>
      <textarea
        className="texify"
        value={name.slice(0, 30)}
        onChange={(e) => setName(e.target.value)}
      ></textarea>
      <label>
        <h2>Feed</h2>
      </label>
      <div className="length">
        <p></p>
        {desc.length >= 130 ? (
          <p>maximum limit obtained</p>
        ) : (
          <p>charecters Left {130 - desc.length}</p>
        )}
      </div>
      <textarea
        className="texify"
        value={desc.slice(0, 129)}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <div>
        <button className="btn" onClick={() => handles()}>
          Submit
        </button>{" "}
      </div>
    </div>
  );
};

export default Edit;
