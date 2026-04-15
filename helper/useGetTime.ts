// Utility to get or set a fixed end time 4 days from now
export const getFixedEndTime = (): number => {
  const key = "countdownEndTime";
  const stored = localStorage.getItem(key);

  if (stored) {
    return parseInt(stored, 10);
  }

  // If no stored end time, set it to 4 days from now
  const endTime = Date.now() + 4 * 24 * 60 * 60 * 1000;
  localStorage.setItem(key, endTime.toString());
  return endTime;
};

// Countdown calculation
export const getTimeRemaining = (): {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const endTime = getFixedEndTime();
  const total = endTime - Date.now();

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { total, days, hours, minutes, seconds };
};