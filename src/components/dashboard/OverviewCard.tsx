interface OverviewCardProps {
  title: string
  description: string
}

export default function OverviewCard({
  title,
  description,
}: OverviewCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}
