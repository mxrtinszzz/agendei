import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { establishments } from "../lib/mock-data";

export const Route = createFileRoute("/establishment/$id")({
  component: EstablishmentScreen,
});

function EstablishmentScreen() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const est = establishments.find((e) => e.id === id);

  if (!est) {
    return (
      <div className="flex items-center justify-center min-h-screen max-w-md mx-auto">
        <p className="text-muted-foreground">Estabelecimento não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background">
      <div className="relative">
        <img src={est.image} alt={est.name} className="w-full h-48 object-cover" />
        <button
          onClick={() => navigate({ to: "/explore" })}
          className="absolute top-4 left-4 bg-primary/80 text-primary-foreground rounded-full p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="px-5 pt-4 pb-8">
        <h1 className="text-lg font-bold text-foreground">{est.name}</h1>
        <p className="text-sm text-muted-foreground">{est.address}</p>
        <p className="text-sm text-muted-foreground">
          {est.neighborhood} - {est.city}
        </p>
        <p className="text-sm text-muted-foreground mb-4">{est.phone}</p>

        <h2 className="text-lg font-bold text-primary mb-3">Serviços</h2>

        <div className="flex flex-col divide-y divide-border">
          {est.services.map((service) => (
            <div key={service.id} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-foreground">{service.name}</p>
                <p className="text-sm text-primary font-semibold">
                  R$ {service.price.toFixed(2).replace(".", ",")}
                </p>
              </div>
              <Link
                to="/booking"
                search={{
                  establishmentId: est.id,
                  serviceId: service.id,
                }}
                className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
              >
                Agendar
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
