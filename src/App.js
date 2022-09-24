import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

function App() {
  const [data, setData] = useState([]);
  // const [length, setLength] = useState(null);
  const cars = ["BMW", "Volvo", "Mini"];

  // console.log(length);
  useEffect(async () => {
    const { data } = await axios.get(
      `https://api.lochinkoz.uz/dashboard/stat/stat_user_by_rules_with_count`
    );
    if (data) {
      setData(data.data);
    }
  }, []);

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="container-fluid bg-dark text-info p-0 m-0 w-100 h-100 ">
          {" "}
          <h3 className="text-center p-0 m-0">
            Date : {moment(data.generated_date).format("DD.MM.YYYY HH:mm:ss")}
          </h3>
        </div>
        {/* <table className="table">
          <thead>
            <tr>
              {data.data?.map((d, i) => (
                <th key={`${d.id}/${i}`} scope="col">
                  {d.title.length > 17 ? (
                    <Tooltip title={d.title} position="top">
                      {d.title}
                    </Tooltip>
                  ) : (
                    d.title
                  )}{" "}
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
                      <p key={s} style={user}>
                        {s.length > 21 ? (
                          <Tooltip title={s} position="top">
                            {s}
                          </Tooltip>
                        ) : (
                          s
                        )}
                      </p>
                    ))}
                </th>
              ))}
            </tr>
          </tbody>
        </table> */}

        <div
          className=" container-fluid d-inline-flex p-0 m-auto border "
          style={{ height: "900px" }}
        >
          {data.data?.map((d, i) => (
            <div className="container-fluid m-0 p-1 bg-dark">
              <ul className="list-group" key={i}>
                <p className="list-group-item m-0 p-auto border  bg-secondary border-info d-flex">
                  <p style={user}>
                    {" "}
                    {d.title} {""}{" "}
                  </p>
                  {d.count ? (
                    <span className=" m-auto  count badge bg-danger ">
                      {d.count}
                    </span>
                  ) : (
                    <span className="count text-dark badge m-auto  bg-warning">
                      0
                    </span>
                  )}
                </p>

                {/* <p>{setLength(d.users)}</p> */}
                <div>
                  {" "}
                  {d.users &&
                    d.users.map((s) => (
                      <span
                        className="list-group-item bg-dark border border-info text-white"
                        key={s}
                      >
                        {s.length > 18 ? (
                          <Tooltip title={s} position="top">
                            <p
                              className="text-nowrap bd-highlight overflow-hidden text-truncate"
                              style={{ width: "150px" }}
                            >
                              {" "}
                              {s}
                            </p>
                          </Tooltip>
                        ) : (
                          s
                        )}
                      </span>
                    ))}
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
const user = {
  display: "inlineBlock",
  width: "100px",
  color: "white",

  margin: "0px",
  padding: "0px",
  // marginTop: "5px",
  // padding: "auto",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

export default App;

{
  /* {d.title.length > 10
                      ? `${d.title.slice(0, 10)}...`
                      : d.title} */
}
