/* ============================================================
   SMART WASTE REPORTER - JavaScript logic
   Data is stored in the browser's localStorage as a simple
   array of report objects, so reports stay saved even after
   refreshing the page.
   ============================================================ */

// Load existing reports from localStorage, or start with an empty list
let reports = JSON.parse(localStorage.getItem("wasteReports")) || [];

// Track which filter is currently selected ("all", "pending", "resolved")
let currentFilter = "all";

// Grab references to the elements we need to update
const form = document.getElementById("reportForm");
const reportsList = document.getElementById("reportsList");
const filterButtons = document.querySelectorAll(".filter-btn");

// ---------- Save reports array to localStorage ----------
function saveReports() {
  localStorage.setItem("wasteReports", JSON.stringify(reports));
}

// ---------- Add a new report ----------
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading

  const newReport = {
    id: Date.now(), // unique id based on current time
    location: document.getElementById("location").value,
    wasteType: document.getElementById("wasteType").value,
    severity: document.getElementById("severity").value,
    description: document.getElementById("description").value,
    status: "pending",
    date: new Date().toLocaleString()
  };

  reports.unshift(newReport); // add newest report to the top
  saveReports();
  render();
  form.reset();
});

// ---------- Mark a report as resolved ----------
function markResolved(id) {
  const report = reports.find(r => r.id === id);
  if (report) report.status = "resolved";
  saveReports();
  render();
}

// ---------- Delete a report ----------
function deleteReport(id) {
  reports = reports.filter(r => r.id !== id);
  saveReports();
  render();
}

// ---------- Handle filter button clicks ----------
filterButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
});

// ---------- Render the stats boxes ----------
function renderStats() {
  document.getElementById("statTotal").textContent = reports.length;
  document.getElementById("statPending").textContent =
    reports.filter(r => r.status === "pending").length;
  document.getElementById("statResolved").textContent =
    reports.filter(r => r.status === "resolved").length;
}

// ---------- Render the list of report cards ----------
function render() {
  renderStats();

  // Apply the current filter
  let visibleReports = reports;
  if (currentFilter !== "all") {
    visibleReports = reports.filter(r => r.status === currentFilter);
  }

  // Show empty message if there is nothing to display
  if (visibleReports.length === 0) {
    reportsList.innerHTML = `<div class="empty">No reports here yet.</div>`;
    return;
  }

  // Build HTML for every report card
  reportsList.innerHTML = visibleReports.map(r => `
    <div class="report ${r.status === 'resolved' ? 'resolved' : ''}">
      <div class="report-top">
        <div>
          <div class="report-title">${r.wasteType}</div>
          <div class="report-location">📍 ${r.location}</div>
        </div>
        <div>
          <span class="badge sev-${r.severity.toLowerCase()}">${r.severity}</span>
        </div>
      </div>

      ${r.description ? `<div class="report-desc">${r.description}</div>` : ""}

      <span class="badge status-${r.status}">${r.status === "pending" ? "Pending" : "Resolved"}</span>
      <div class="report-date">Reported on ${r.date}</div>

      <div class="report-actions">
        ${r.status === "pending"
          ? `<button class="btn-small btn-resolve" onclick="markResolved(${r.id})">Mark Resolved</button>`
          : ""}
        <button class="btn-small btn-delete" onclick="deleteReport(${r.id})">Delete</button>
      </div>
    </div>
  `).join("");
}

// ---------- Initial render on page load ----------
render();
