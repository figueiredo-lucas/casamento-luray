import { useEffect, useState } from "react";
import { listenAllGuests } from "./db/guestsRepo";
import { FaCheck, FaTimes, FaQuestionCircle } from "react-icons/fa";

const statusOf = (guest) =>
  guest.confirmed === true
    ? "confirmed"
    : guest.confirmed === false
      ? "declined"
      : "pending";

const GuestsDashboard = () => {
  const [guests, setGuests] = useState(null);
  const [error, setError] = useState(null);
  const [hidden, setHidden] = useState(() => new Set());

  const toggle = (status) =>
    setHidden((prev) => {
      const next = new Set(prev);
      next.has(status) ? next.delete(status) : next.add(status);
      return next;
    });

  useEffect(() => {
    const unsubscribe = listenAllGuests(
      (data) => setGuests(data),
      () => setError("Erro ao carregar convidados."),
    );
    return () => unsubscribe();
  }, []);

  if (error) return <span className="text-red-500">{error}</span>;
  if (!guests) return <span className="text-slate-500">Carregando...</span>;

  const confirmed = guests.filter((g) => g.confirmed === true).length;
  const declined = guests.filter((g) => g.confirmed === false).length;
  const pending = guests.filter((g) => g.confirmed == null).length;

  return (
    <div className="flex flex-col gap-6">
      <span className="title">Convidados</span>

      <div className="flex gap-4 text-sm text-center">
        <button
          onClick={() => toggle("confirmed")}
          className={`flex-1 cursor-pointer bg-green-100 rounded py-2 transition-opacity ${hidden.has("confirmed") ? "opacity-40" : ""}`}
        >
          <div className="text-2xl font-bold text-green-600">{confirmed}</div>
          <div className="text-green-700">Confirmados</div>
        </button>
        <button
          onClick={() => toggle("declined")}
          className={`flex-1 cursor-pointer bg-red-100 rounded py-2 transition-opacity ${hidden.has("declined") ? "opacity-40" : ""}`}
        >
          <div className="text-2xl font-bold text-red-500">{declined}</div>
          <div className="text-red-700">Não vão</div>
        </button>
        <button
          onClick={() => toggle("pending")}
          className={`flex-1 cursor-pointer bg-slate-100 rounded py-2 transition-opacity ${hidden.has("pending") ? "opacity-40" : ""}`}
        >
          <div className="text-2xl font-bold text-slate-500">{pending}</div>
          <div className="text-slate-600">Pendentes</div>
        </button>
      </div>

      <ul className="flex flex-col gap-2">
        {guests
          .filter((guest) => !hidden.has(statusOf(guest)))
          .map((guest, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-beige py-2 px-4 rounded"
            >
              <span className="text-xs text-slate-400 font-mono w-16 shrink-0">
                {guest.code}
              </span>
              <span className="flex-1 font-medium">{guest.name}</span>
              {guest.confirmed === true && (
                <FaCheck className="text-green-500" />
              )}
              {guest.confirmed === false && (
                <FaTimes className="text-red-500" />
              )}
              {guest.confirmed == null && (
                <FaQuestionCircle className="text-slate-300" />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GuestsDashboard;
