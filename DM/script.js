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

        const desiredWidth = 680;
        const scale = desiredWidth / posterElement.offsetWidth;

        html2canvas(posterElement, {
            useCORS: true,
            scale: scale
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
                const labelElement = event.target.closest('.image-upload-label');
                const imgElement = labelElement.querySelector('img');

                // Ensure the label has position relative and overflow hidden
                // This should ideally be in CSS, but we add it here for robustness.
                labelElement.style.position = 'relative';
                labelElement.style.overflow = 'hidden';

                reader.onload = function(e) {
                    const tempImage = new Image();
                    tempImage.onload = function() {
                        const containerWidth = labelElement.offsetWidth;
                        const containerHeight = labelElement.offsetHeight;
                        const imageWidth = tempImage.naturalWidth;
                        const imageHeight = tempImage.naturalHeight;

                        const containerRatio = containerWidth / containerHeight;
                        const imageRatio = imageWidth / imageHeight;

                        let newWidth, newHeight, newLeft, newTop;

                        if (imageRatio > containerRatio) {
                            // Image is wider than container, fit height
                            newHeight = containerHeight;
                            newWidth = newHeight * imageRatio;
                            newTop = 0;
                            newLeft = (containerWidth - newWidth) / 2;
                        } else {
                            // Image is taller than container, fit width
                            newWidth = containerWidth;
                            newHeight = newWidth / imageRatio;
                            newLeft = 0;
                            newTop = (containerHeight - newHeight) / 2;
                        }

                        if (imgElement) {
                            imgElement.src = e.target.result;
                            imgElement.style.display = 'block'; // Make sure it's visible
                            imgElement.style.position = 'absolute';
                            imgElement.style.width = newWidth + 'px';
                            imgElement.style.height = newHeight + 'px';
                            imgElement.style.left = newLeft + 'px';
                            imgElement.style.top = newTop + 'px';
                            imgElement.style.objectFit = 'initial'; // Reset object-fit
                        }
                    };
                    tempImage.src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        });
    });
});

