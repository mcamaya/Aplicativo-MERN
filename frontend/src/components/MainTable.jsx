import React, { useState, useEffect } from "react";
import { Button, Table, TableBody } from "semantic-ui-react";
import { HiTrash } from "react-icons/hi";
import { ImPencil } from "react-icons/im";
import "./MainTable.css";

export default function MainTable({
  objKeys,
  apiFetch,
  apiData,
  title,
  deleteData,
  rowClass,
}) {
  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <div className="table-container">
      <h2 className="main-title">{title}</h2>
      <Table singleLine className="main-table">
        <Table.Header>
          <Table.Row>
            {objKeys.map((item, index) => (
              <Table.HeaderCell key={index}>{item.thead}</Table.HeaderCell>
            ))}
            <Table.HeaderCell>Editar</Table.HeaderCell>
            <Table.HeaderCell>Eliminar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <TableBody>
          {apiData.map((registro) => (
            <Table.Row className={rowClass(registro)} key={registro._id}>
              {objKeys.map(({ field, subfield }, index) => (
                <Table.Cell key={index}>
                  {subfield == undefined
                    ? registro[field]
                    : registro[field][subfield]}
                </Table.Cell>
              ))}
              <Table.Cell>
                <Button className="edit icon-btn">
                  <ImPencil className="table-icon" />
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  className="delete icon-btn"
                  onClick={() => deleteData(registro._id)}
                >
                  <HiTrash className="table-icon" />
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
