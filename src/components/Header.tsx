export default function Header() {
  return (
    <header className="h-16 bg-header border-b border-border flex items-center justify-between px-6">
      {/* Left */}
      <h1 className="text-sm font-medium text-textSecondary">
        JM CORPORATE SERVICES LLP
      </h1>

      {/* Right */}
      <div className="flex items-center gap-6">
        <input
          type="text"
          placeholder="Search Clients"
          className="h-9 w-64 rounded-md border border-border px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        />

        <button className="relative text-lg">
          <span className="w-2 h-2 bg-danger rounded-full absolute -top-1 -right-1"></span>
          🔔
        </button>

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm leading-tight">
            <p className="font-medium text-textPrimary">Manish</p>
            <p className="text-xs text-textSecondary">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </header>
  );
}
