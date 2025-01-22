import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

import '../styles/index.scss';

function ImageCompression() {
    const [compressedImage, setCompressedImage] = useState(null);
    const [file, setFile] = useState(null);
    const [view, setView] = useState(true);
    const [compressedImageSize, setCompressedImageSize] = useState(0);

    console.log(compressedImage, "compressedImage");


    const imageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setFile(file);
        setView(false);
    }

    const handleImageUpload = async () => {

        // Set compression options
        const options = {
            maxSizeMB: 1,  // Max file size (in MB)
            maxWidthOrHeight: 800,  // Max width or height (in pixels)
            useWebWorker: true,  // Use web workers to optimize performance
        };

        try {
            // Compress the image
            const compressedFile = await imageCompression(file, options);
            setCompressedImageSize(compressedFile);
            console.log(compressedFile)
            // Create a URL for the compressed image
            const compressedFileUrl = URL.createObjectURL(compressedFile);
            console.log(compressedFileUrl + "compressedFileUrl");
            setCompressedImage(compressedFileUrl);
        } catch (error) {
            console.error("Error during image compression: ", error);
        }
    };


    return (
        <>
        <div className="container card custom-card p-5 w-100">
          <h1 className="fw-bold my-3">Image Compressor</h1>
          <h5 >
            Compress JPG, PNG, SVG, or GIF with the best quality and compression. Reduce the
            filesize of your images at once.
          </h5>
      
          {view && (
            <div className="inStyle">
              <input
                className="bg-success size"
                type="file"
                accept="image/*"
                onChange={imageUpload}
              />
            </div>
          )}
      
          <div className="container mt-5">
            <div className="row justify-content-center align-items-center">
              {/* Original Image Section */}
              <div className="col-md-4 text-center">
                {file && (
                  <div className="my-3">
                    <h3>Original Image:</h3>
                    <p>
                      Size:{" "}
                      {file.size < 1024 * 1024
                        ? `${(file.size / 1024).toFixed(2)} KB`
                        : `${(file.size / 1024 / 1024).toFixed(2)} MB`}
                    </p>
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Original"
                      className="img-fluid rounded"
                      style={{ maxWidth: "400px" }}
                    />
                  </div>
                )}
              </div>
      
              {/* Compress Button Section */}
              {file && (
                <div className="col-md-4 text-center">
                  <button
                    className="btn btn-primary"
                    onClick={handleImageUpload}
                  >
                    Compress
                  </button>
                </div>
              )}
      
              {/* Compressed Image Section */}
              <div className="col-md-4 text-center ">
                {compressedImage && (
                  <div>
                    <h3>Compressed Image:</h3>
                    <p>
                      Size:{" "}
                      {compressedImageSize.size < 1024 * 1024
                        ? `${(compressedImageSize.size / 1024).toFixed(2)} KB`
                        : `${(compressedImageSize.size / 1024 / 1024).toFixed(2)} MB`}
                    </p>
                    <img
                      src={compressedImage}
                      alt="Compressed"
                      className="img-fluid rounded "
                      style={{ maxWidth: "400px" }}
                    />
                    <a
                      href={compressedImage}
                      download={`${file.name}.jpg`}
                      className="btn btn-success mt-3"
                    >
                      Download Image
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
      

    );
}

export default ImageCompression;
