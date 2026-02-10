import { createContext, useContext, useMemo } from 'react';

type ExperienceContextValue = {
  active: string,
  prevActive: string, // Useful for transitions
  setActive: (id: string) => void,
};

const ExperienceContext = createContext<ExperienceContextValue>({
  active: '',
  prevActive: '',
  setActive: () => { /* Empty */ },
});

export default ExperienceContext;

export function useExperienceContext(id: string) {
  const { active, prevActive, setActive } = useContext(ExperienceContext);
  return useMemo(() => ({
    active: active === id,
    prevActive: prevActive === id,
    setActive: () => setActive(id),
  }), [id, active, prevActive, setActive]);
}
