import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, DollarSign, MapPin } from "lucide-react";
import { mockReservations } from "../lib/mock-data";
import { AppShell } from "../components/AppShell";

export const Route = createFileRoute("/reservations")({
  component: ReservationsScreen,
});

function ReservationsScreen() {
  return (
    <AppShell>
      <div className="px-5 pt-6">
        <h1 className="text-xl font-bold text-primary text-center mb-6">Minhas Reservas</h1>

        <div className="flex flex-col gap-4">
          {mockReservations.map((r) => (
            <div key={r.id} className="bg-background border border-border rounded-xl p-4 shadow-sm">
              <h3 className="font-bold text-foreground">{r.serviceName}</h3>
              <p className="text-sm text-muted-foreground mb-3">{r.establishmentName}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-1">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-4 h-4 text-primary" /> {r.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-primary" /> {r.time}
                </span>
              </div>

              <p className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                <DollarSign className="w-4 h-4 text-primary" /> R$ {r.price.toFixed(2).replace(".", ",")}
              </p>

              <p className="flex items-start gap-1 text-sm text-muted-foreground mb-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>
                  {r.address}<br />
                  {r.neighborhood} - {r.city}<br />
                  {r.phone}
                </span>
              </p>

              <div className="flex gap-3">
                <button className="flex-1 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Reagendar
                </button>
                <button className="flex-1 py-2 rounded-full bg-destructive text-destructive-foreground text-sm font-medium">
                  Excluir Reserva
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
