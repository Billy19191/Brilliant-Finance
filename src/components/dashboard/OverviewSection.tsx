import OverviewCard from './OverviewCard'

export default function OverviewSection() {
  const mockData = [
    {
      title: 'Total Lending',
      value: 10000,
      description: 'Across all active lending contracts.',
    },
    {
      title: 'Total Borrowing',
      value: 5000,
      description: 'Current liabilities from borrowing.',
    },
  ]
  return (
    <section className="font-inter">
      <h2 className="text-2xl font-bold">Welcome, Billy191!</h2>
      <p className="mt-2 text-base">
        Here is a summary of your lending and borrowing activities.
      </p>
      <div className="flex flex-row my-10 gap-8">
        {mockData.map((card) => (
          <OverviewCard
            key={card.title}
            title={card.title}
            value={card.value}
            description={card.description}
          />
        ))}
      </div>
    </section>
  )
}
