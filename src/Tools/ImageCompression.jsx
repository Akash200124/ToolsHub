import React, { useState } from 'react'

function ImageCompression() {

    const [compressedImage, setCompressedImage] = useState(null);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (!file) return;

        // Set compression options
        const options = {
            maxSizeMB: 1,  // Max file size (in MB)
            maxWidthOrHeight: 800,  // Max width or height (in pixels)
            useWebWorker: true,  // Use web workers to optimize performance
        };

        try {
            // Compress the image
            const compressedFile = await imageCompression(file, options);
            // Create a URL for the compressed image
            const compressedFileUrl = URL.createObjectURL(compressedFile);
            setCompressedImage(compressedFileUrl);
        } catch (error) {
            console.error("Error during image compression: ", error);
        }
    };

    return (
        <div>
            <h1>Image Compressor</h1>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {compressedImage && (
                <div>
                    <h3>Compressed Image:</h3>
                    <img src={compressedImage} alt="Compressed" style={{ width: '300px' }} />
                </div>
            )}
        </div>

    )
}

export default ImageCompression
