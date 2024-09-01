document.addEventListener('DOMContentLoaded', () => {
    const showData = document.getElementById('data');
    
    showData.innerText = localStorage.getItem('dato');
})