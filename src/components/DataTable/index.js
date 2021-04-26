import React from 'react';
import { useDispatch } from 'react-redux';
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow
} from '@material-ui/core';

import DataTableItem from './components/DataTableItem';
import DataTableHeader from './components/DataTableHeader';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => ({
    el,
    index
  }));
  stabilizedThis.sort((a, b) => {
    const order = comparator(a.el, b.el);
    if (order !== 0) return order;
    return a.index - b.index;
  });
  return stabilizedThis.map(element => element.el);
}

const DataTable = ({
  dataSource,
  columns,
  actions,
  itemComponent: DataTableItemCustom
}) => {
  const dispatch = useDispatch();

  const {
    loadingData,
    rows,
    rowsPerPageOptions,
    rowsPerPage,
    page,
    selected,
    order,
    orderBy
  } = dataSource;

  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows?.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    dispatch(actions?.setPage(newPage));
  };

  const handleChangeRowsPerPage = event => {
    dispatch(actions?.setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(actions?.setPage(0));
  };

  const handleRequestSort = (_, property) => {
    const isAsc = orderBy === property && order === 'asc';
    dispatch(actions?.setOrder(isAsc ? 'desc' : 'asc'));
    dispatch(actions?.setOrderBy(property));
  };

  return (
    <>
      <TableContainer style={{ maxHeight: 580 }}>
        <Table
          aria-labelledby="tableTitle"
          size={'medium'}
          aria-label="enhanced table"
        >
          <DataTableHeader
            columns={columns}
            numSelected={selected?.length ?? 0}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={() => {}}
            onRequestSort={handleRequestSort}
            rowCount={rows?.length ?? 0}
          />

          <TableBody>
            {loadingData ? (
              <TableRow>
                <TableCell colSpan={columns?.length ?? 0} align="center">
                  <CircularProgress />
                  <p>Carregando...</p>
                </TableCell>
              </TableRow>
            ) : (
              <>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row._id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <>
                        {!DataTableItemCustom ? (
                          <DataTableItem
                            key={row?._id + '-' + index.toString()}
                            row={row}
                            columns={columns}
                            actions={actions}
                            isItemSelected={isItemSelected}
                            labelId={labelId}
                          />
                        ) : (
                          <DataTableItemCustom
                            key={row?._id + '-' + index.toString()}
                            row={row}
                            columns={columns}
                            actions={actions}
                            isItemSelected={isItemSelected}
                            labelId={labelId}
                          />
                        )}
                      </>
                    );
                  })}
              </>
            )}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={8} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage={'Registos por página'}
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={rows?.length ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default DataTable;
