(function () {
  const yearNode = document.querySelector("[data-year]");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const countdownNode = document.querySelector("[data-event-countdown]");
  if (!countdownNode) {
    return;
  }

  const eventTime = new Date("2026-04-18T13:30:00+01:00");
  const diff = eventTime.getTime() - Date.now();

  if (Number.isNaN(eventTime.getTime())) {
    countdownNode.textContent = "Match time listed for April 18, 2026.";
    return;
  }

  if (diff <= 0) {
    countdownNode.textContent = "Scheduled match window has passed. Check official listings for updates.";
    return;
  }

  const totalHours = Math.floor(diff / 3600000);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  countdownNode.textContent = `${days}d ${hours}h until scheduled kickoff`;
})();
