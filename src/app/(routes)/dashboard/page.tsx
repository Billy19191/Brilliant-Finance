import ActiveContractsSection from '@/components/dashboard/ActiveContractsSection'
import OverviewCard from '@/components/dashboard/OverviewCard'
import OverviewSection from '@/components/dashboard/OverviewSection'

export default function Dashboard() {
  return (
    <div className="px-20 font-inter">
      <OverviewSection />
      <ActiveContractsSection />
    </div>
  )
}
