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
      setData(data.data);
    }
  }, []);

  return (
    <>
      <div className="container-fluid ">
        <h1 className="text-center">
          Vaqt: {moment(data.generated_date).format("DD.MM.YYYY HH:mm:ss")}
        </h1>

        <table className="table">
          <thead>
            <tr>
              {data.data?.map((d, i) => (
                <th key={`${d.id}/${i}`} scope="col">
                  {d.title.length > 15 ? (
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
        </table>
      </div>
    </>
  );
}
const user = {
  width: "200px",
  color: "white",
  border: "1px  solid white",
  marginTop: "5px",
  padding: "5px",
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
// {data.data?.map((d, i) => (
//   <th key={i}>
//     {d.users &&
//       d.users.map((s) => (
//         <p key={s} style={user}>
//           {s.length > 21 ? (
//             <Tooltip title={s} position="top">
//               {s}
//             </Tooltip>
//           ) : (
//             s
//           )}
