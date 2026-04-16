import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { establishments, availableTimes } from "../lib/mock-data";

export const Route = createFileRoute("/booking")({
  component: BookingScreen,
  validateSearch: (search: Record<string, unknown>) => ({
    establishmentId: (search.establishmentId as string) || "",
    serviceId: (search.serviceId as string) || "",
  }),
});

const MONTH_NAMES = [
  "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
  "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO",
];
const DAY_NAMES = ["D", "S", "T", "Q", "Q", "S", "S"];

function BookingScreen() {
  const { establishmentId, serviceId } = Route.useSearch();
  const navigate = useNavigate();

  const est = establishments.find((e) => e.id === establishmentId);
  const service = est?.services.find((s) => s.id === serviceId);

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<string | null>("09:30");

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); }
    else setCurrentMonth(currentMonth - 1);
    setSelectedDay(null);
  };

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); }
    else setCurrentMonth(currentMonth + 1);
    setSelectedDay(null);
  };

  const handleConfirm = () => {
    alert("Reserva confirmada!");
    navigate({ to: "/reservations" });
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background px-5 pt-6 pb-8">
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate({ to: "/establishment/$id", params: { id: establishmentId } })} className="text-primary">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold text-primary">Fazer uma reserva</h1>
      </div>

      {/* Calendar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="text-foreground"><ChevronLeft className="w-5 h-5" /></button>
          <span className="font-bold text-foreground text-sm">{MONTH_NAMES[currentMonth]} {currentYear}</span>
          <button onClick={nextMonth} className="text-foreground"><ChevronRight className="w-5 h-5" /></button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {DAY_NAMES.map((d, i) => (
            <span key={i} className="text-xs text-primary font-semibold">{d}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {Array.from({ length: firstDayOfWeek }).map((_, i) => (
            <span key={`e-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const isSelected = day === selectedDay;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`w-9 h-9 mx-auto rounded-full text-sm flex items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-primary text-primary-foreground font-bold"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time */}
      <div className="mb-6">
        <h3 className="font-semibold text-foreground mb-3">Horário</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {availableTimes.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap border transition-colors ${
                selectedTime === t
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Service summary */}
      {service && (
        <div className="mb-6">
          <p className="text-sm text-foreground">{service.name}</p>
          <p className="text-sm text-primary font-semibold">
            R$ {service.price.toFixed(2).replace(".", ",")}
          </p>
        </div>
      )}

      <button
        onClick={handleConfirm}
        className="w-full py-4 rounded-full bg-primary text-primary-foreground text-lg font-bold active:opacity-90 transition-opacity"
      >
        Confirmar reserva
      </button>
    </div>
  );
}
