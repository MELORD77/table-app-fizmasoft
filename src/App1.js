import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

import { Button, LabelGroup, Segment } from "semantic-ui-react";
function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(
      `https://api.lochinkoz.uz/dashboard/stat/stat_user_by_rules_with_count`
    );
    if (data) {
      setData(data.data);
    }
  }, []);

  // let users = [];
  // data.data.data.map((item) => {
  //   users = [...users, ...(item.users || [])];
  // });
  // let uniqueChars = [...new Set(users)];

  // console.log(uniqueChars.length);
  // const users = [];
  // const movis = [
  //   { id: 1, name: "jek", fullname: "jek rouse" },
  //   { id: 2, name: "tek", fullname: "tek rouse" },
  //   { id: 3, name: "pek", fullname: "pek rouse" },
  //   { id: 4, name: "kek", fullname: "kek rouse" },
  //   { id: 5, name: "hek", fullname: "hek rouse" },
  // ];

  let fulmovi = data.data?.map((movi) => ({
    title: movi.title,
    users: movi.users,
  }));

  // console.log(data.data);
  console.log(fulmovi);
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="container-fluid bg-dark text-info p-0 m-0 w-100 h-100 ">
          {" "}
          <h3 className="text-center p-0 m-0">
            Date : {moment(data.generated_date).format("DD.MM.YYYY HH:mm:ss")}
          </h3>
        </div>
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

                <div>
                  {" "}
                  {d.users &&
                    d.users.map((s) => (
                      <div className="m-1 ">
                        <Button inverted color="blue" key={s}>
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
                            <p style={{ width: "150px" }}>{s}</p>
                          )}
                        </Button>
                      </div>
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
