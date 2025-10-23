import { ContractStatus } from '@/types/types'
import CryptoIcon from '../common/CryptoIcon'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import StatusLabelBadge from './StatusLabelBadge'

export default function ActiveContractsTable() {
  const tableHeaders: string[] = [
    'Asset',
    'Type',
    'Amount',
    'Duration',
    'Start Date',
    'End Date',
    'Status',
  ]
  const tableCells: Record<string, string | number>[] = [
    {
      asset: 'Bitcoin',
      symbol: 'btc',
      type: 'Lending',
      amount: 1.5,
      duration: '30 days',
      startDate: '2023-01-01',
      endDate: '2023-01-31',
      status: 'Active',
    },
    {
      asset: 'Ethereum',
      symbol: 'eth',
      type: 'Borrowing',
      amount: 2.0,
      duration: '60 days',
      startDate: '2023-02-01',
      endDate: '2023-04-02',
      status: 'Completed',
    },
    {
      asset: 'USDT',
      symbol: 'usdt',
      type: 'Lending',
      amount: 10.0,
      duration: '15 days',
      startDate: '2023-03-01',
      endDate: '2023-03-16',
      status: 'Expired',
    },
    {
      asset: 'BNB',
      symbol: 'bnb',
      type: 'Borrowing',
      amount: 500.0,
      duration: '45 days',
      startDate: '2023-04-01',
      endDate: '2023-05-16',
      status: 'Pending',
    },
  ]

  return (
    <>
      <Table className="border border-separate border-gray-200 rounded-xl shadow-sm p-3">
        <TableHeader>
          <TableRow>
            {tableHeaders.map((header) => (
              <TableHead key={header} className="font-bold">
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableCells.map((cell, index) => (
            <TableRow key={index}>
              <TableCell className="flex items-center gap-x-2">
                <CryptoIcon symbol={cell.symbol as string} size={22} />
                {cell.asset}
              </TableCell>
              <TableCell>{cell.type}</TableCell>
              <TableCell>{cell.amount}</TableCell>
              <TableCell>{cell.duration}</TableCell>
              <TableCell>{cell.startDate}</TableCell>
              <TableCell>{cell.endDate}</TableCell>
              <TableCell>
                <StatusLabelBadge status={cell.status as ContractStatus} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
