import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

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
      <div className="container-fluid ">
        <h1 className="text-center">
          Vaqt: {moment(data.generated_date).format("DD.MM.YYYY HH:mm:ss")}
        </h1>
        {/* <div style={{ display: "flex" }}>
          {data.data?.map((d) => (
            <div>
              <h6 style={{ border: "1px solid white", margin: 0 }}>
                {d.title} - <h6 style={{color:"red"}}>{d.count}</h6>
              </h6>
              {d.users &&
                d.users.map((s) => (
                  <p style={{ border: "1px solid white", margin: '2px'  }}>{s}</p>
                ))}
            </div>
          ))}
        </div> */}
        <table className="table">
          <thead>
            <tr>
              {data.data?.map((d, i) => (
                <th key={`${d.id}/${i}`} scope="col">
                  <Tooltip title={d.title} position="top">
                    {d.title.length > 10
                      ? `${d.title.slice(0, 10)}...`
                      : d.title}
                  </Tooltip>{" "}
                  -{" "}
                  <span style={{ color: "red" }}>
                    {d.count ? (
                      d.count
                    ) : (
                      <span style={{ color: "orange" }}>0</span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.data?.map((d, i) => (
                <th key={i}>
                  {d.users &&
                    d.users.map((s) => (
                      <Tooltip key={s} title={s} position="top">
                        <p
                          style={{
                            border: "1px solid white",
                            margin: "5px",
                            padding: "5px",
                          }}
                        >
                          {s.length > 12 ? `${s.slice(0, 12)}...` : s}
                        </p>
                      </Tooltip>
                    ))}
                </th>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
