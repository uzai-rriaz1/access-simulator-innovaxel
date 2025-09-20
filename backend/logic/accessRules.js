const rooms = {
  ServerRoom: { minLevel: 2, open: "09:00", close: "11:00", cooldown: 15 },
  Vault: { minLevel: 3, open: "09:00", close: "10:00", cooldown: 30 },
  "R&D Lab": { minLevel: 1, open: "08:00", close: "12:00", cooldown: 10 },
};

function timeToMinutes(time) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function simulateAccess(employees) {
  const lastAccess = {};

  return employees.map((emp) => {
    const rule = rooms[emp.room];
    if (!rule) {
      return { ...emp, status: "Denied", reason: "Invalid room" };
    }

    const reqTime = timeToMinutes(emp.request_time);
    const openTime = timeToMinutes(rule.open);
    const closeTime = timeToMinutes(rule.close);

    if (emp.access_level < rule.minLevel) {
      return { ...emp, status: "Denied", reason: "Below required level" };
    }

    if (reqTime < openTime || reqTime > closeTime) {
      return { ...emp, status: "Denied", reason: "Room closed" };
    }

    const lastKey = `${emp.id}-${emp.room}`;
    if (
      lastAccess[lastKey] !== undefined &&
      reqTime - lastAccess[lastKey] < rule.cooldown
    ) {
      return { ...emp, status: "Denied", reason: "Cooldown not passed" };
    }

    lastAccess[lastKey] = reqTime;
    return {
      ...emp,
      status: "Granted",
      reason: `Access granted to ${emp.room}`,
    };
  });
}

module.exports = { simulateAccess };
