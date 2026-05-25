const CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
  .page-enter { animation: fadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both; }
  .hover-card { transition: transform 0.2s ease, box-shadow 0.2s ease; cursor: default; }
  .hover-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(122,14,32,0.1); }
  input::placeholder, textarea::placeholder { color: rgba(42,26,10,0.25); }
  select option { background: #F5EDE0; color: #2A1A0A; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #F0E6C8; }
  ::-webkit-scrollbar-thumb { background: rgba(122,14,32,0.25); border-radius: 3px; }
`;