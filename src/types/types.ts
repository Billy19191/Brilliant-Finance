export type ContractStatus =
  | 'Active'
  | 'Expired'
  | 'Pending'
  | 'Completed'
  | 'Cancelled'

export enum ContractStatusVariantType {
  success,
  warning,
  info,
  danger,
  default,
}
