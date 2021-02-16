import React, { useState } from "react";
import MaterialTable from "material-table";

function TODOListComponent() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: "Task", field: "task" },
    {
      title: "Priority",
      field: "priority",
      initialEditValue: "High",
    },
  ]);

  const [data, setData] = useState([
    { task: "Homework", priority: "High" },
    { task: "Coffee", priority: "Low" },
  ]);

  return (
    <MaterialTable
      style={{
        width: "50rem",
        margin: "auto",
        height: "432px",
        overflowY: "auto",
      }}
      title="Todo List"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
export default TODOListComponent;
