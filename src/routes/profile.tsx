import { createFileRoute } from "@tanstack/react-router";
import { mockUser } from "../lib/mock-data";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/profile")({
  component: ProfileScreen,
});

function ProfileScreen() {
  return (
    <AppShell>
      <div className="px-5 pt-6">
        <h1 className="text-xl font-bold text-primary text-center mb-6">Meu Perfil</h1>

        <div className="divide-y divide-border">
          <div className="py-4">
            <p className="text-sm font-semibold text-foreground">Nome</p>
            <p className="text-sm text-muted-foreground">{mockUser.name}</p>
          </div>
          <div className="py-4">
            <p className="text-sm font-semibold text-foreground">E-mail</p>
            <p className="text-sm text-muted-foreground">{mockUser.email}</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
