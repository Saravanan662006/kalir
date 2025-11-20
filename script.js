// Generic modal open/close logic
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'flex';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = 'none';
}

// Optional: Close modal when clicking outside
window.addEventListener('click', function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Optional: Alert acknowledgment logic
function acknowledgeAlert(alertId) {
  console.log(`Alert ${alertId} acknowledged`);
  // You can add backend integration here
}

// Optional: Assign staff dynamically
function assignStaff(location, staffName) {
  console.log(`Assigned ${staffName} to ${location}`);
  // Extend with Flask POST or fetch API
}