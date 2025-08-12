import {
  flexRender,
  useReactTable,
  type TableOptions,
} from '@tanstack/react-table'
import {
  Table as OriginTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../table'
import './style.css'

export const Table = <T = unknown,>(props: TableOptions<T>) => {
  const table = useReactTable(props)

  return (
    <OriginTable>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'sl-table-row-selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={props.columns.length}
              className="slTableCellEmpty"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </OriginTable>
  )
}

export * from '@tanstack/react-table'
