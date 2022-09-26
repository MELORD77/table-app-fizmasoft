import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
const url = `https://api.lochinkoz.uz/dashboard/stat/stat_user_by_rules_with_count `;
function App() {
  const [data, setData] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get(url);
    setData(data.data);

    //   data.data.data.map((item) => {
    //     users = [...users, ...(item.users || [])];
    //   });

    //   let uniqueChars = [...new Set(users)];
    //   users.push(uniqueChars);
  };

  useEffect(() => {
    fetchPosts();
  });

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="container-fluid bg-dark text-info p-0 m-0 w-100 h-100 ">
          {" "}
          <h2 className="text-center border border-info m-0">
            Date : {moment(data.generated_date).format("DD.MM.YYYY HH:mm:ss")}
          </h2>
        </div>
        {/* <table className="table">
          <thead>
            <tr>
              {data.data?.map((d, i) => (
                <th key={`${d.id}/${i}`} scope="col">

                  {d.title.length > 15 ? (

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

                      <p className="paragrf" key={s} style={user}>
                        {" "}

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
            <div
              key={`${d.id}/${i}`}
              className="container-fluid m-0 p-1 bg-dark"
            >
              <ul className="list-group">
                <div className="list-group-item m-0 p-auto border  bg-secondary border-info d-flex">
                  {" "}
                  <Tooltip title={d.title} position="bottom">
                    <p style={user}>
                      {" "}
                      {d.title} {""}{" "}
                    </p>
                  </Tooltip>
                  {d.count ? (
                    <span className=" m-auto  count badge bg-danger ">
                      {d.count}
                    </span>
                  ) : (
                    <span className="count text-dark badge m-auto  bg-warning">
                      0
                    </span>
                  )}{" "}
                </div>

                <div>
                  {" "}
                  {d.users &&
                    d.users.map((s, i) => (
                      <span
                        key={`${d.id}/${i}`}
                        className="list-group-item bg-dark border border-info text-white m-0"
                      >
                        {" "}
                        {s.length > 17 ? (
                          <Tooltip title={s} position="top">
                            <p
                              className="text-nowrap bd-highlight overflow-hidden text-truncate p-0 m-0"
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
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};
export default App;
