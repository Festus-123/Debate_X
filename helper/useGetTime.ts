// Utility to get or set a fixed end time 4 days from now


// Countdown calculation
export const getTimeRemaining = (): {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const endTime = new Date("2026-04-27T00:00:00Z").getTime();
  const total = endTime - Date.now();

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { total, days, hours, minutes, seconds };
};