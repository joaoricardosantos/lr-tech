const TIME_ZONE = "America/Recife";

function natalNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(date);

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const weekdayLabel = parts.find((part) => part.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);

  return {
    weekday: weekdayMap[weekdayLabel] ?? 0,
    minutes: hour * 60 + minute,
  };
}

export function getOpenStatus(date = new Date()) {
  const { weekday, minutes } = natalNow(date);

  if (weekday === 0) {
    return { open: false, label: "Fechado agora · voltamos segunda, 8h30" };
  }

  const opens = weekday === 6 ? 8 * 60 : 8 * 60 + 30;
  const closes = weekday === 6 ? 16 * 60 : 18 * 60;

  if (minutes >= opens && minutes < closes) {
    const closeLabel = weekday === 6 ? "16h" : "18h";
    return { open: true, label: `Aberto agora · até às ${closeLabel}` };
  }

  if (minutes < opens) {
    const openLabel = weekday === 6 ? "8h" : "8h30";
    return { open: false, label: `Fechado agora · abrimos às ${openLabel}` };
  }

  if (weekday === 6) {
    return { open: false, label: "Fechado agora · voltamos segunda, 8h30" };
  }

  return { open: false, label: "Fechado agora · abrimos amanhã, 8h30" };
}
