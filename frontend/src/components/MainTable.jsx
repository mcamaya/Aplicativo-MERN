import React, { useState, useEffect } from "react";
import { Button, Table, TableBody, TableCell } from "semantic-ui-react";
import "./MainTable.css";

export default function MainTable({ objKeys, apiFetch, apiData, title }) {
  useEffect(() => {
    apiFetch();
  }, []);

  return (
    <div className="table-container">
      <h2 className="main-title">{title}</h2>
      <Table singleLine>
        <Table.Header>
          <Table.Row className="table-row">
            {objKeys.map((item, index) => (
              <Table.HeaderCell key={index}>{item.thead}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <TableBody>
          {apiData.map((registro) => (
            <Table.Row className="table-row" key={registro._id}>
              {objKeys.map((item, index) => (
                <Table.Cell key={index}>
                  {registro[item.field]}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
