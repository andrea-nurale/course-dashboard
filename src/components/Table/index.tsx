import Button from "../Button";

interface Props {
  columns: { name: string; columnName: string }[];
  data: any[];
  handleEdit: (id: number)=>void
}
const Table = ({ columns, data, handleEdit }: Props) => {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column) => (
            <th
              key={column.columnName}
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {data.map((data) => (
          <tr key={data.id}>
            {columns.map((column, index) => (
              <td
                key={index + column.columnName}
                className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
              >
                {data[column.columnName]}
              </td>
            ))}
              <td
                  className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
              >
                  <Button onClick={()=>handleEdit(data.id)}>Edit</Button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
