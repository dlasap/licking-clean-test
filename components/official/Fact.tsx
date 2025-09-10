function Fact({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-xl border px-2.5 py-2 bg-card">
      <span className="text-primary">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

export default Fact
