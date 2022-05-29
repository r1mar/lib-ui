import React from 'react';
import { Table, TableHeader, TableHeaderCell, TableRow, TableCell } from 'rm-lib-ui';

export default function PropertiesTable(props) {
  return (
    <Table caption={props.caption} responsive="sm">
    <TableHeader>
      <TableRow>
        <TableHeaderCell scope="col">Name</TableHeaderCell>
        <TableHeaderCell scope="col" className="d-none d-md-table-cell">Type</TableHeaderCell>
        <TableHeaderCell scope="col" title="Optional" className="d-none d-sm-table-cell">Opt.</TableHeaderCell>
        <TableHeaderCell scope="col" title="Default">Def.</TableHeaderCell>
        <TableHeaderCell scope="col">Value</TableHeaderCell>
        <TableHeaderCell scope="col" className="d-none d-xl-table-cell">Description</TableHeaderCell>
      </TableRow>
    </TableHeader>
    <tbody>
      {props.rows.map((row, index) => (
        <TableRow key={index}>
          <TableCell>{row[0]}</TableCell>
          <TableCell className="d-none d-md-table-cell">{row[1]}</TableCell>
          <TableCell className="d-none d-sm-table-cell">{row[2]}</TableCell>
          <TableCell>{row[3]}</TableCell>
          <TableCell>{row[4]}</TableCell>
          <TableCell className="d-none d-xl-table-cell">{row[5]}</TableCell>
        </TableRow>
      ))}
    </tbody>
  </Table>
  );
}