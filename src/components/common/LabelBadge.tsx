import { ContractStatusVariantType } from '@/types/types'

interface LabelBadgeProps {
  textLabel: string
  icon?: React.ReactNode
  variant?: ContractStatusVariantType
}

export default function LabelBadge({
  textLabel,
  icon,
  variant = ContractStatusVariantType.default,
}: LabelBadgeProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case ContractStatusVariantType.success:
        return 'text-emerald-700 bg-emerald-50 border-emerald-200'
      case ContractStatusVariantType.warning:
        return 'text-amber-700 bg-amber-50 border-amber-200'
      case ContractStatusVariantType.danger:
        return 'text-rose-700 bg-rose-50 border-rose-200'
      case ContractStatusVariantType.info:
        return 'text-sky-700 bg-sky-50 border-sky-200'
      case ContractStatusVariantType.default:
        return 'text-zinc-700 bg-zinc-50 border-zinc-200'
    }
  }

  return (
    <div
      className={`inline-flex justify-center items-center px-2 py-0.5 text-xs font-medium rounded-full border w-fit ${getVariantClasses()}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {textLabel}
    </div>
  )
}
