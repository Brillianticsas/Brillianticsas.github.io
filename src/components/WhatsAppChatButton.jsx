import React, { useState } from 'react';

const WhatsAppChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'agent',
      text: 'Hola, bienvenido al chat de Connectmsg. Escribe tu mensaje y te responderemos por este canal.'
    }
  ]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: 'user',
        text
      },
      {
        id: Date.now() + 1,
        role: 'agent',
        text: 'Mensaje enviado a Connectmsg. Respuesta pendiente de conexion por webhook.'
      }
    ]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex h-[540px] w-[370px] max-w-[calc(100vw-1rem)] flex-col overflow-hidden rounded-2xl border border-[var(--brand-cyan)]/30 bg-slate-900 shadow-[0_18px_45px_rgba(217,0,196,0.18)]">
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-950/90 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-gradient-brand">Connectmsg</p>
              <p className="text-[11px] text-slate-400">Webchat en preparacion</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md px-2 py-1 text-xs font-semibold text-slate-300 transition hover:bg-slate-800"
            >
              Cerrar
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-900/95 p-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-brand text-slate-950 font-medium'
                      : 'border border-slate-700 bg-slate-800 text-slate-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700 bg-slate-950/90 p-3">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe un mensaje..."
              className="h-20 w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-[var(--brand-cyan)]"
            />
            <div className="mt-2 flex items-center justify-end gap-2">
              <span className="text-[11px] text-slate-500">Pendiente de conexion webhook</span>
            </div>
            <div className="mt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={handleSend}
                className="rounded-lg bg-gradient-brand px-3 py-2 text-xs font-semibold text-slate-950 transition hover:brightness-110"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex h-14 items-center gap-2 rounded-full bg-gradient-brand px-4 text-slate-950 shadow-[0_10px_30px_rgba(217,0,196,0.35)] transition hover:scale-[1.02] hover:brightness-110"
          aria-label="Abrir webchat Connectmsg"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" aria-hidden="true">
            <path d="M8 10h8M8 14h5m-8 6l2.5-3H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h.5L5 20z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </svg>
          <span className="text-xs font-bold tracking-wide">Connectmsg</span>
        </button>
      )}

      {isOpen && (
        <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300 transition hover:bg-slate-800"
            >
              Minimizar
            </button>
          </div>
        )}
    </div>
  );
};

export default WhatsAppChatButton;
