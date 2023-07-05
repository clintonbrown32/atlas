
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        // Perform search here
        console.log('Search executed:', this.value);
    }
});
