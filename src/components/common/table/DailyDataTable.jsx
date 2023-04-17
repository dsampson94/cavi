import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';

import { arrayOf, shape, string } from 'prop-types';

import { generateId, getClassNames, isEmpty, removeCamelCase } from '../../../tools/general/helpers.util';
import { handleRowDoubleClick, hideColumnHeader } from './TableFunctions.util';

import './table.scss';

export const DailyDataTable = ({
                                 tableName,
                                 activeTableData,
                                 hiddenColumns,
                                 setSelectedIndex,
                                 setSelectedDropdownObject,
                                 toggleDropdowns,
                                 setActiveTab,
                                 onWeatherPopupDailyDataDetailClick
                               }) => {

  const history = useHistory();
  const { groupName, clientName } = useParams();

  const [selectedRow, setSelectedRow] = useState(undefined);
  const [hoveredRowObject, setHoveredRowObject] = useState(undefined);

  const buildTableHeader = () => {
    if (!activeTableData) return;
    let headers;
    if (activeTableData?.length !== 0) {
      const objectKeys = Object.keys(activeTableData[0]);
      headers = objectKeys.filter((key) => !hiddenColumns.includes(key)).map((key) => (
        <th key={ generateId() }
            style={ { color: hideColumnHeader(tableName, key) } }>
          <div className="table__header-row__text--field-setup">
            { removeCamelCase(key) }
          </div>
        </th>
      ));
    }

    return (
      <thead className="table__header">
      <tr className="table__header-row">
        { headers }
      </tr>
      </thead>
    );
  };

  const buildTableBody = () => {
    if (!activeTableData) return;
    const rows = activeTableData?.map((object, rowIndex) => {
      let objectLocationName = object?.fieldName?.locationName;
      let isHeaderRow = (objectLocationName?.includes('-forecast') || objectLocationName?.includes('-landGroup'));

      const objectValues = [];
      for (const property in object) {
        if (!hiddenColumns.includes(property)) {
          objectValues.push(object[property]);
        }
      }

      let tableDataElements = [];
      if (activeTableData?.length > 0) {
        tableDataElements = objectValues?.map((value, dataIndex) => {
          switch (dataIndex) {
            case 0:
              return <td key={ generateId() }
                         className="whitespace-nowrap min-w-fit px-1">
                <div className="flex text-sm">
                  { value }
                </div>
              </td>;
            case 1:
            case 4:
              return <td key={ generateId() }
                         className="whitespace-nowrap min-w-fit px-1">
                <div className="flex text-sm text-blue-500">
                  { value }
                </div>
              </td>;
            case 2:
            case 5:
              return <td key={ generateId() }
                         className="whitespace-nowrap min-w-fit px-1">
                <div className="flex text-sm text-red-500">
                  { value }
                </div>
              </td>;
            case 11:
              return <td key={ generateId() }
                         className="whitespace-nowrap min-w-fit px-1 z-10"
                         onClick={ () => {
                           onWeatherPopupDailyDataDetailClick(selectedRow?.date?.slice(0, -4)?.replaceAll('-', '/'));
                           setActiveTab(3);
                         } }>
                <div className="flex text-sm text-blue-500 underline z-20 hover:text-blue-700">
                  { value }
                </div>
              </td>;
            default:
              return <td key={ generateId() }
                         className="whitespace-nowrap min-w-fit px-1">
                <div className="flex text-sm">
                  { value }
                </div>
              </td>;
          }
        });
      }

      return (
        <>
          <tr className={ getClassNames('table__body__row',
            { header: isHeaderRow, selected: (object === selectedRow) }) }
              onMouseDown={ () => setSelectedRow(object) }
              onDoubleClick={ () => handleRowDoubleClick(history, groupName, clientName, object?.fieldName) }
              key={ generateId() }>
            { tableDataElements }
          </tr>
        </>
      );
    });

    return (
      <tbody className="table__body">
      { (!isEmpty(rows)) ? rows :
        <tr key={ generateId() }>
          <td className="text-xs">{ '' }</td>
        </tr> }
      </tbody>
    );
  };

  return (
    <table className="table">
      { buildTableHeader() }
      { buildTableBody() }
    </table>
  );
};

DailyDataTable.propTypes = {
  tableName: string,
  activeTableData: arrayOf(shape({})),
  hiddenColumns: arrayOf(string)
};
