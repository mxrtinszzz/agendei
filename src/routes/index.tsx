import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navigate } from "@tanstack/react-router";
import logoImg from "../assets/logo.png";
import loadingImg from "../assets/loading.png";

export const Route = createFileRoute("/")({
  component: SplashScreen,
});

function SplashScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (done) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary max-w-md mx-auto">
      <img src={logoImg} alt="Agendei" className="w-32 h-32 mb-8" />
      <img src={loadingImg} alt="Carregando" className="w-8 h-8 animate-spin-slow opacity-80" />
    </div>
  );
}
