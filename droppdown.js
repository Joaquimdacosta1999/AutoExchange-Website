document.getElementById('buyCarBtn').addEventListener('click', function(e) {
    e.preventDefault();
    var dropdown = document.getElementById('buyCarDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Optional: Hide dropdown if clicking outside
document.addEventListener('click', function(e) {
    var btn = document.getElementById('buyCarBtn');
    var dropdown = document.getElementById('buyCarDropdown');
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});