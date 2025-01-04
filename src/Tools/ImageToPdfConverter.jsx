import React, { useState, useRef, useEffect } from "react";
import { jsPDF } from "jspdf";
import '../styles/ImageToPdfConverter.scss'

const ImageToPdfConverter = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageName, setImageName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [orientation, setOrientation] = useState("portrait");


    const [photo, setPhoto] = useState(null); // State to store the captured photo
    const videoRef = useRef(null); // Ref for the video element
    const canvasRef = useRef(null); // Ref for the canvas element
    const [isCameraOn, setIsCameraOn] = useState(false);

    // Handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (file && file.type.startsWith("image/")) {
            setSelectedFile(file);
            setImageName(file.name);

            const url = URL.createObjectURL(file);
            setImageUrl(url);
        } else {
            setSelectedFile(null);
            setImageName("");
            setImageUrl("");
            alert("Please upload a valid image file!");
        }
    };

    // Convert image to PDF and download
    const convertToPdf = async () => {
        if (!selectedFile) {
            alert("No file selected!");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const imgData = reader.result;

            // Create a new PDF document
            const pdf = new jsPDF({
                orientation: orientation,
            });

            // Add the image to the PDF
            const img = new Image();
            img.src = imgData;

            img.onload = () => {
                const width = pdf.internal.pageSize.getWidth();
                const height = (img.height * width) / img.width;

                pdf.addImage(imgData, "JPEG", 0, 0, width, height);

                // Download the PDF
                pdf.save(imageName.split('.').slice(0, -1).join('.') + ".pdf");

                const pdfBlob = pdf.output('blob');
                const pdfUrl = URL.createObjectURL(pdfBlob);

                // Open the PDF in a new tab
                window.open(pdfUrl, '_blank');
            };
        };

        reader.readAsDataURL(selectedFile);
    };



    useEffect(() => {
        if (isCameraOn) {
            const startCamera = async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    videoRef.current.srcObject = stream;
                } catch (err) {
                    console.error("Error accessing the camera", err);
                }
            };
            startCamera();

            return () => {
                if (videoRef.current && videoRef.current.srcObject) {
                    const stream = videoRef.current.srcObject;
                    const tracks = stream.getTracks();
                    tracks.forEach(track => {
                        track.stop(); // Stop each track in the stream
                    });
                    videoRef.current.srcObject = null; // Clear the video element source
                }
            };
        }
    }, [isCameraOn]);

    const startCamera = () => {
        setIsCameraOn(true);
    }

    console.log("iscmaera is on", isCameraOn)
    const capturePhoto = () => {


        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Draw the current frame from video onto canvas
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        // Get the image data from canvas
        const dataUrl = canvas.toDataURL('image/png');
        setPhoto(dataUrl); // Set the captured photo

        // Convert the Base64 image data into a Blob
        const base64ToBlob = (base64Data) => {
            const byteString = atob(base64Data.split(',')[1]);
            const mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0];

            const arrayBuffer = new ArrayBuffer(byteString.length);
            const uintArray = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
                uintArray[i] = byteString.charCodeAt(i);
            }

            return new Blob([arrayBuffer], { type: mimeString });
        };

        const blob = base64ToBlob(dataUrl);
        setSelectedFile(blob);
        setIsCameraOn(false);


    };
    return (
        <div className="container card custom-card p-5 w-50 ">
            <div>
                <h2>Image to PDF Converter</h2>
                {isCameraOn && (
                    <>

                        <video ref={videoRef} autoPlay width="100%" height="auto" />
                        <button onClick={capturePhoto}>Capture Photo</button>
                    </>
                )}


                {photo && (
                    <div>
                        <img src={photo} alt="Captured" />
                    </div>
                )}

                {/* Hidden canvas element to draw the video frame */}
                <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480" />
            </div>


            <div >

                {imageUrl && (
                    <img src={imageUrl} alt={imageName} />
                )}



                {
                    !imageUrl && (

                        <div className="d-flex align-items-center justify-content-center flex-column">
                            {photo ?
                                <button className="btn w-50" onClick={() => window.location.reload()}  >Capture a Again</button>

                                :
                                <>
                                    <input type="file" accept="image/*" onChange={handleFileUpload} />
                                    <button className="btn w-50" onClick={startCamera} >Capture a Photo</button>
                                </>
                            }
                        </div>

                    )
                }
                {(imageUrl || photo) && (
                    <div>
                        <label className="mt-3 p-2 fs-4 ">Orientation:</label>
                        <select className="p-1" value={orientation} onChange={(e) => setOrientation(e.target.value)}>
                            <option value="portrait">Portrait</option>
                            <option value="landscape">Landscape</option>
                        </select>
                    </div>
                )}

                <br />
                <button onClick={convertToPdf} >
                    Convert to PDF
                </button>
            </div>
        </div>
    );
};

export default ImageToPdfConverter;
