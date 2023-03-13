import { useEffect, useState, useMemo } from "react";
const UseMemoExample = () => {
  const [myData, setData] = useState(null);
  const [toggle, setToogle] = useState(null);

  // Major Difference between useMemo and useCallback is
  // useMemo it takes the funtion and return the funtion return

  //where as in useCallback it return the entire funtion

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (var i = 0; i > comments.length; i++) {
      var currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
        console.log(longestName);
      }
    }

    console.log(longestName);

    return longestName;
  };

  const myMemo = useMemo(() => findLongestName(myData), [myData]);

  return (
    <div className="use-memo">
      <fieldset>
        <br />
        <br />
        <br />
        <br />
        <legend style={{ color: "red" }}>Use MEMO example</legend>
        <div>{myMemo}</div>

        <button
          onClick={() => {
            setToogle(!toggle);
          }}
        >
          {" "}
          Toggle
        </button>
        {toggle && <h1>toggle</h1>}
        <br />
        <br />
        <br />
        <br />
      </fieldset>
    </div>
  );
};

export default UseMemoExample;
