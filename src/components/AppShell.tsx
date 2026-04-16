import { BottomNav } from "./BottomNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background relative">
      <div className="pb-16">{children}</div>
      <BottomNav />
    </div>
  );
}
