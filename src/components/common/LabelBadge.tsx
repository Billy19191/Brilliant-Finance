interface LabelBadgeProps {
  textLabel: string
  icon?: React.ReactNode
}

export default function LabelBadge({ textLabel, icon }: LabelBadgeProps) {
  return (
    <div className="inline-flex justify-center items-center px-2 py-0.5 text-xs font-medium rounded-full border border-slate-200 w-fit">
      {icon && <span className="mr-1">{icon}</span>}
      {textLabel}
    </div>
  )
}
