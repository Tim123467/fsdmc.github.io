<script>
    const popup = document.getElementById('popup');
    const overlay = document.querySelector('.overlay');
    const agreeButton = document.getElementById('agreeButton');

    // show popup
    function showPopup() {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    // hide popup
    agreeButton.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
          localStorage.setItem('popupDismissed', 'true'); 
         // ^ remove the 2 slashes once test succeed
    });

    // popup dismissed check
    if (!localStorage.getItem('popupDismissed')) {
        showPopup();
    }
</script>
