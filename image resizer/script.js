document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const widthInput = document.getElementById('widthInput');
    const heightInput = document.getElementById('heightInput');
    const resizeButton = document.getElementById('resizeButton');
    const resizedImage = document.getElementById('resizedImage');

    resizeButton.addEventListener('click', () => {
        const imageFile = imageInput.files[0];
        const newWidth = parseInt(widthInput.value);
        const newHeight = parseInt(heightInput.value);

        if (imageFile && !isNaN(newWidth) && !isNaN(newHeight)) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;

                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);

                    resizedImage.src = canvas.toDataURL('image/jpeg');
                };
            };

            reader.readAsDataURL(imageFile);
        }
    });
});