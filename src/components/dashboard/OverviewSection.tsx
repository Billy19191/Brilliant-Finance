import OverviewCard from './OverviewCard'

export default function OverviewSection() {
  return (
    <section className="font-inter">
      <h2 className="text-2xl font-bold">Welcome, Crypto Investor!</h2>
      <p className="mt-2 text-base">
        Here is a summary of your lending and borrowing activities.
      </p>
      <div className="flex flex-row my-10 gap-8">
        <OverviewCard title="Card 1" description="Description for Card 1" />
        <OverviewCard title="Card 2" description="Description for Card 2" />
      </div>
    </section>
  )
}
