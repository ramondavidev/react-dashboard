import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, TableCell, TableRow, Tooltip } from '@material-ui/core';
import { Delete as IconDelete, Edit as IconEdit } from '@material-ui/icons';

const DataTableItem = React.memo(
  ({ row, columns, actions, isItemSelected, labelId }) => {
    const dispatch = useDispatch();

    const [isHovering, setIsHovering] = useState < boolean > false;
    return (
      <TableRow
        hover
        tabIndex={-1}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {columns.map(column => (
          <>
            {column.id !== 'actions' ? (
              <TableCell
                key={column.id}
                align={column.alignment}
                padding={column.disablePadding ? 'none' : 'default'}
                style={{
                  color: row.deleted ? 'gray' : 'none',
                  textDecoration: row.deleted ? 'line-through' : 'none'
                }}
              >
                <DataTableColumn type={column.type} value={row[column[id]]} />
              </TableCell>
            ) : (
              <TableCell
                key={column.id}
                padding="none"
                align="right"
                width={140}
              >
                {isHovering && !row.deleted && (
                  <>
                    {actions?.editItem && (
                      <Tooltip title={formatMessage('commonLabelEdit')}>
                        <IconButton
                          aria-label={formatMessage('commonLabelEdit')}
                          onClick={() => dispatch(actions?.editItem(row.id))}
                        >
                          <IconEdit />
                        </IconButton>
                      </Tooltip>
                    )}
                    {actions?.deleteItem && (
                      <Tooltip title={formatMessage('commonLabelDelete')}>
                        <IconButton
                          aria-label={formatMessage('commonLabelDelete')}
                          onClick={() => dispatch(actions?.deleteItem(row.id))}
                        >
                          <IconDelete />
                        </IconButton>
                      </Tooltip>
                    )}
                  </>
                )}
              </TableCell>
            )}
          </>
        ))}
      </TableRow>
    );
  }
);

export default DataTableItem;
