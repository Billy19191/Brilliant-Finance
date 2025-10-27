import ActiveContractsSection from '@/components/dashboard/ActiveContractsSection'
import OverviewCard from '@/components/dashboard/OverviewCard'
import OverviewSection from '@/components/dashboard/OverviewSection'
import TransactionSection from '@/components/dashboard/TransactionSection'

export default function Dashboard() {
  return (
    <div className="px-20 font-inter animate-fade-in">
      <OverviewSection />
      <ActiveContractsSection />
      <TransactionSection />
    </div>
  )
}
