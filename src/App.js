import axios from "axios";
import moment from "moment/moment";
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
        <h1 className="text-center">
          Vaqt: {moment(data.generated_date).format("DD.MM.YYYY HH:mm:ss")}
        </h1>
        <div style={{ display: "flex" }}>
          {data.data?.map((d) => (
            <div>
              <h6 style={{ border: "1px solid black", margin: 0 }}>
                {d.title} -{d.count}
              </h6>
              {d.users &&
                d.users.map((s) => (
                  <p style={{ border: "1px solid black", margin: 0 }}>{s}</p>
                ))}
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
