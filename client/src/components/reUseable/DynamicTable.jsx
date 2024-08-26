import React from "react";

const DynamicTable = ({
  headers,
  data,
  headerToKeyMapping, // map object {Header:DataKey}
  opt,
  onDelete = () => {},
  onUpdate = () => {},
}) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          {opt === 0 && <th>Edit</th>}
          {opt === 1 && <th>Delete</th>}
          {opt === 2 && (
            <>
              <th>Edit</th>
              <th>Delete</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row._id}>
            {headers.map((header, colIndex) => (
              <td key={colIndex}>
                {row[headerToKeyMapping[header]]}
              </td>
            ))}
            {opt === 0 && (
              <td>
                <button onClick={() => onUpdate(row._id)}>Edit</button>
              </td>
            )}
            {opt === 1 && (
              <td>
                <button onClick={() => onDelete(row._id)}>Delete</button>
              </td>
            )}
            {opt === 2 && (
              <>
                <td>
                  <button onClick={() => onUpdate(row._id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => onDelete(row._id)}>Delete</button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
