import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Table, TableTH } from "./Table.styles";
import { v4 as uuidv4 } from "uuid";

interface tableRowData {
  id: string;
  label: string;
  ability: number;
  vision: number;
}

export const MagicTable = () => {
  const [tableData, setTableData] = useState([
    {
      label: "1",
      ability: 0,
      vision: 0,
      id: uuidv4(),
    },
    {
      label: "2",
      ability: 40,
      vision: 40,
      id: uuidv4(),
    },
    {
      label: "3",
      ability: 100,
      vision: 20,
      id: uuidv4(),
    },
  ]);

  useEffect(() => {
    let tableRows = JSON.parse(localStorage.getItem("tableData") || "{}");
    setTableData(tableRows);
  }, []);

  const handleDeleteButton = (id: string) => {
    let tableRows = [...tableData];
    tableRows = tableRows.filter((row) => row.id !== id);
    setTableData(tableRows);
  };

  const addButtonHandler = () => {
    const tableRows = [...tableData];
    tableRows.push({
      label: "New",
      ability: 50,
      vision: 50,
      id: uuidv4(),
    });
    setTableData(tableRows);
  };

  const changeHandler = (event: any, id: string) => {
    const { name, value } = event.target;
    const dataIndex = tableData.findIndex((data) => data.id === id);
    let tableRows = [...tableData] as any;
    tableRows[dataIndex][name] = value;

    setTableData(tableRows);
  };

  useEffect(() => {
    if (tableData) {
      const tableRows = [...tableData] as any;
      localStorage.setItem("tableData", JSON.stringify(tableRows));
    }
  });

  return (
    <div>
      <Button
        buttonWidth="50px"
        clickHandler={() => addButtonHandler()}
        text="Add"
      />
      <Table>
        <thead>
          <tr>
            <TableTH tableHeadWidth="180px"> Label</TableTH>
            <TableTH tableHeadWidth="100px"> Vision</TableTH>
            <TableTH tableHeadWidth="100px"> Ability</TableTH>
            <TableTH tableHeadWidth="100px"> Delete</TableTH>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={data.id}>
              <td>
                <Input
                  onChange={(event) => changeHandler(event, data.id)}
                  type="text"
                  width="180px"
                  name="label"
                  defaultValue={tableData[index].label}
                />
              </td>
              <td>
                <Input
                  onChange={(event) => changeHandler(event, data.id)}
                  type="number"
                  width="100px"
                  name="vision"
                  defaultValue={tableData[index].vision}
                />
              </td>
              <td>
                <Input
                  onChange={(event) => changeHandler(event, data.id)}
                  type="number"
                  width="100px"
                  name="ability"
                  defaultValue={tableData[index].ability}
                />
              </td>
              <td>
                <Button
                  buttonWidth="100px"
                  clickHandler={() => handleDeleteButton(data.id)}
                  text="Delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
