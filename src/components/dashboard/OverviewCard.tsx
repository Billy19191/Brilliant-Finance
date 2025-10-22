import { formatNumberWithCommas } from '@/utils/formatNumber'

interface OverviewCardProps {
  title: string
  value: number
  description: string
}

export default function OverviewCard({
  title,
  value,
  description,
}: OverviewCardProps) {
  return (
    <div className="flex flex-col rounded-lg w-1/3 h-52 p-6 bg-slate-50 font-bitter">
      <h3 className="text-xl font-semibold ">{title}</h3>
      <div className="flex-grow" />
      <div className="text-3xl font-bold">
        $ {formatNumberWithCommas(value)}
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}
