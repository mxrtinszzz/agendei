import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { categories } from "../lib/mock-data";
import { AppShell } from "../components/AppShell";
import logoImg from "../assets/logo.png";

export const Route = createFileRoute("/home")({
  component: HomeScreen,
});

function HomeScreen() {
  return (
    <AppShell>
      <div className="px-5 pt-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src={logoImg} alt="Agendei" className="w-8 h-8 [filter:brightness(0)_saturate(100%)_invert(67%)_sepia(30%)_saturate(600%)_hue-rotate(130deg)]" />
          <span className="text-xl font-bold text-primary">agendei</span>
        </div>

        <h2 className="text-foreground font-semibold text-base mb-4">Agende os seus serviços</h2>

        <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-3 mb-6">
          <span className="text-muted-foreground text-sm flex-1">Qual cidade você está?</span>
          <MapPin className="w-5 h-5 text-primary" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/explore"
              search={{ category: cat.id }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary hover:bg-accent transition-colors"
            >
              <span className="text-3xl">{cat.emoji}</span>
              <span className="text-xs text-foreground font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
