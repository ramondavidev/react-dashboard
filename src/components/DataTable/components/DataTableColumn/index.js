import React from 'react';

import {
  formatCurrency,
  formatDate,
  formatDatetime,
  formatNumber
} from '~/utils/format';

const DataTableColumn = React.memo(({ type, value }) => {
  return (
    <>
      {(() => {
        switch (type) {
          case 'currency':
            return <>{formatCurrency(value)}</>;
          case 'number':
            return <>{formatNumber(value)}</>;
          case 'datetime':
            return <>{formatDatetime(value)}</>;
          case 'date':
            return <>{formatDate(value)}</>;
          default:
            return <>{value}</>;
        }
      })()}
    </>
  );
});

export default DataTableColumn;
