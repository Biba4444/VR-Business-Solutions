document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const logoElement = document.querySelector('.Logo');
    if (logoElement) {
        console.log('.Logo element found');
        logoElement.addEventListener('click', function() {
            console.log('.Logo clicked, reloading page');
            location.reload();
        });
    } else {
        console.log('.Logo element not found');
    }
});


