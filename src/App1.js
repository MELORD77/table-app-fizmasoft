import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import "./App.css";
import "react-tippy/dist/tippy.css";
import { Button, Popup } from "semantic-ui-react";

const url = `https://api.lochinkoz.uz/dashboard/stat/stat_user_by_rules_with_count `;
function App1() {
  const [data, setData] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get(url);
    setData(data.data);
  };

  useEffect(() => {
    fetchPosts();
  });

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
          style={{ height: "1000px" }}
        >
          {data.data?.map((d, i) => (
            <div
              key={`${d.id}/${i}`}
              className="container-fluid m-0 p-1 bg-dark"
            >
              <ul className="list-group">
                <Button
                  basic
                  color="blue"
                  className="list-group-item m-0 py-2  px-1 border  bg-secondary border-info d-flex"
                >
                  {" "}
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
                </Button>

                <div>
                  {" "}
                  {d.users &&
                    d.users.map((s) => (
                      <div key={`${s.id}/${s}`} className="m-1 ">
                        <Button inverted color="blue" key={`${s.id}/${s}`}>
                          {s.length > 20 ? (
                            <Popup
                              content={s}
                              trigger={
                                <p
                                  className="text-nowrap bd-highlight overflow-hidden text-truncate"
                                  style={{ width: "150px" }}
                                >
                                  {" "}
                                  {s}
                                </p>
                              }
                            />
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
  margin: "auto",
  marginLeft: "1px",
  padding: "0px",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

export default App1;
