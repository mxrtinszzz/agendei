import { Link, useLocation } from "@tanstack/react-router";
import { Home, Search, CalendarDays, User } from "lucide-react";

const tabs = [
  { to: "/home" as const, icon: Home, label: "Início" },
  { to: "/explore" as const, icon: Search, label: "Explorar" },
  { to: "/reservations" as const, icon: CalendarDays, label: "Reservas" },
  { to: "/profile" as const, icon: User, label: "Perfil" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border flex justify-around items-center h-16 max-w-md mx-auto z-50">
      {tabs.map((tab) => {
        const isActive = location.pathname.startsWith(tab.to);
        const Icon = tab.icon;
        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-2 transition-colors ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-[10px]">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
