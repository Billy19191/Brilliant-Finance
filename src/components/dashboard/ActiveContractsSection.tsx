import ActiveContractsTable from './ActiveContractsTable'

export default function ActiveContractsSection() {
  return (
    <section className="font-inter">
      <h2 className="text-2xl font-bold">Active Contracts</h2>
      <p className="mt-2 text-base">
        Below is a list of your currently active lending and borrowing
        contracts.
      </p>
      <div className="py-8">
        <ActiveContractsTable />
      </div>
      {/* <div className="mt-6">
        <p className="text-gray-600">
          You have no active contracts at the moment.
        </p>
      </div> */}
    </section>
  )
}
