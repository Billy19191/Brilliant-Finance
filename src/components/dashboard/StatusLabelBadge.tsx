import { ContractStatus, ContractStatusVariantType } from '@/types/types'
import LabelBadge from '../common/LabelBadge'

interface StatusLabelBadgeProps {
  status: ContractStatus
}
export default function StatusLabelBadge({ status }: StatusLabelBadgeProps) {
  switch (status) {
    case 'Active':
      return (
        <LabelBadge
          textLabel="Active"
          variant={ContractStatusVariantType.success}
        />
      )
    case 'Pending':
      return (
        <LabelBadge
          textLabel="Pending"
          variant={ContractStatusVariantType.warning}
        />
      )
    case 'Completed':
      return (
        <LabelBadge
          textLabel="Completed"
          variant={ContractStatusVariantType.info}
        />
      )
    case 'Expired':
      return (
        <LabelBadge
          textLabel="Expired"
          variant={ContractStatusVariantType.danger}
        />
      )
    default:
      return (
        <LabelBadge
          textLabel="Unknown"
          variant={ContractStatusVariantType.default}
        />
      )
  }
}
