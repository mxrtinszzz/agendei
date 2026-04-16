import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import { establishments, categories } from "../lib/mock-data";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/explore")({
  component: ExploreScreen,
  validateSearch: (search: Record<string, unknown>) => ({
    category: (search.category as string) || "",
  }),
});

function ExploreScreen() {
  const { category } = Route.useSearch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const categoryName = categories.find((c) => c.id === category)?.name || "Todos";

  const filtered = establishments
    .filter((e) => !category || e.categoryId === category)
    .filter((e) => !query || e.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <AppShell>
      <div className="px-5 pt-6">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={() => navigate({ to: "/home" })} className="text-primary">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-lg font-bold text-primary">Explorar</h1>
            <p className="text-sm text-muted-foreground">{categoryName}</p>
          </div>
          <div className="w-6" />
        </div>

        <div className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-2.5 my-4">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground flex-1"
          />
        </div>

        <div className="flex flex-col divide-y divide-border">
          {filtered.map((est) => (
            <Link
              key={est.id}
              to="/establishment/$id"
              params={{ id: est.id }}
              className="py-4 block"
            >
              <h3 className="font-bold text-foreground">{est.name}</h3>
              <p className="text-sm text-muted-foreground">{est.address}</p>
              <p className="text-sm text-muted-foreground">
                {est.neighborhood} - {est.city}
              </p>
              <p className="text-sm text-muted-foreground">{est.phone}</p>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="py-8 text-center text-muted-foreground text-sm">Nenhum resultado encontrado.</p>
          )}
        </div>
      </div>
    </AppShell>
  );
}
