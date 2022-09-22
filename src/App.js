import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(
      `https://api.lochinkoz.uz/dashboard/stat/stat_user_by_rules_with_count`
    );
    if (data) {
      console.log(data.data);
      setData(data.data);
    }
  }, []);

  return (
    <>
      <div className="container-fliid ">
        <h1 className="text-center">Vaqt: {data.generated_date}</h1>
        <div style={{ display: "flex" }}>
          {data.data?.map((d) => (
            <div>
              <h6>
                {d.title} -{d.count}
              </h6>
              {d.users && d.users.map((s) => <p>{s}</p>)}
            </div>
          ))}
        </div>
        {/* <table className="table">
          <thead>
            <tr>
              {data.data?.map((d, i) => (
                <th key={`${d.id}/${i}`} scope="col">
                  {d.title} -{d.count}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.data?.map((u) => {
              return (
                u.users &&
                u.users.map((user, i) => (
                  <tr key={`${user}/${i}`} scope="col">
                    <td>{user}</td>
                  </tr>
                ))
              );
            })}
          </tbody>
        </table> */}
      </div>
    </>
  );
}

export default App;
