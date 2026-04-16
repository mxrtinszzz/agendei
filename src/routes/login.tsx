import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import logoImg from "../assets/logo.png";

export const Route = createFileRoute("/login")({
  component: LoginScreen,
});

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/home" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background max-w-md mx-auto px-8">
      <div className="flex items-center justify-center gap-2 pt-12 pb-8">
        <img src={logoImg} alt="Agendei" className="w-10 h-10 [filter:brightness(0)_saturate(100%)_invert(67%)_sepia(30%)_saturate(600%)_hue-rotate(130deg)]" />
        <span className="text-2xl font-bold text-primary">agendei</span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-4">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground outline-none"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-full bg-secondary text-foreground placeholder:text-muted-foreground outline-none"
        />
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg mt-2 active:opacity-90 transition-opacity"
        >
          Acessar
        </button>
      </div>

      <p className="text-center text-sm text-muted-foreground pb-8">
        Não tenho uma conta. Toque para criar uma agora.
      </p>
    </div>
  );
}
