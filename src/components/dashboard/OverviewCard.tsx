import LabelBadge from '@/components/common/LabelBadge'
import { formatNumberWithCommas } from '@/lib/utils'

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
    <div className="flex flex-col rounded-xl w-1/4 h-44 p-6 font-inter border border-gray-200 shadow-xs">
      <span className="flex flex-row items-center gap-4">
        <h3 className="text-lg font-medium text-gray-600">{title}</h3>
        <span className="flex-grow" />
        <LabelBadge textLabel="+25%" />
      </span>
      <div className="flex-grow" />
      <div className="text-3xl font-bold animate-slide-down">
        $ {formatNumberWithCommas(value)}
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}
