import React from "react";
import "./list.css";

class List extends React.Component {
    render() {

        return (
            <div>
            <table className="list">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr>
            <tr>
              <td>Janet</td>
              <td>James</td>
            </tr>
            <tr>
              <td>John</td>
              <td>Jameson</td>
            </tr>
          </table>
          </div>
        )
    }
}

export default List;