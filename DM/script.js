document.addEventListener('DOMContentLoaded', function() {
    // --- Set dynamic date ---
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const formatDate = (date) => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}月${day}日`;
    };

    const dateRangeElement = document.getElementById('promo-date-range');
    if (dateRangeElement) {
        dateRangeElement.textContent = `${formatDate(today)} ~ ${formatDate(tomorrow)}`;
    }

    // --- Download button ---
    document.getElementById('download-btn').addEventListener('click', function() {
        const posterElement = document.getElementById('poster');

        const activeElement = document.activeElement;
        if (activeElement && activeElement.hasAttribute('contenteditable')) {
            activeElement.blur();
        }

        html2canvas(posterElement, {
            useCORS: true,
            scale: 2
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'poster.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    // --- Background color changer ---
    document.getElementById('bg-color-picker').addEventListener('input', function(event) {
        document.getElementById('poster').style.backgroundColor = event.target.value;
    });

    // --- Image upload ---
    document.querySelectorAll('.image-upload-input').forEach(input => {
        input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                const imgElement = event.target.closest('.image-upload-label').querySelector('img');
                
                reader.onload = function(e) {
                    imgElement.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        });
    });
});