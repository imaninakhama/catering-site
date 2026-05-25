import { useState, useEffect, useCallback } from 'react';

export default function useRouter() {
  const get = () => window.location.hash.replace("#", "") || "/";
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const fn = () => setRoute(get());
    window.addEventListener("hashchange", fn);
    return () => window.removeEventListener("hashchange", fn);
  }, []);
  const navigate = useCallback((p) => { window.location.hash = p; }, []);
  return { route, navigate };
}