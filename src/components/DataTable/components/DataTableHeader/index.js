import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@material-ui/core';

const DataTableHeader = React.memo(
  ({ columns, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) => {
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          {/* <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all' }}
            />
          </TableCell> */}
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.alignment}
              padding={column.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === column.id ? order : false}
            >
              <>
                {column.id === 'actions' ? (
                  <p style={{ fontWeight: 'bold' }}>{column?.label}</p>
                ) : (
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : 'asc'}
                    onClick={createSortHandler(column.id)}
                    style={{ fontWeight: 'bold' }}
                  >
                    {column?.label}
                  </TableSortLabel>
                )}
              </>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
);

export default DataTableHeader;
