import React, { useState } from "react";
import { jsPDF } from "jspdf";
import '../styles/ImageToPdfConverter.scss'

const ImageToPdfConverter = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageName, setImageName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [orientation, setOrientation] = useState("portrait");

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
                window.open(pdfUrl , '_blank');
            };
        };

        reader.readAsDataURL(selectedFile);
    };

    return (
        <div className="container card custom-card p-5 w-50 ">
            <div >
                <h2>Image to PDF Converter</h2>
                {imageUrl && (
                    <img src={imageUrl} alt={imageName} />
                )}

                {imageUrl && (
                    <div>
                        <label className="mt-3 p-2 fs-4 ">Orientation:</label>
                        <select className="p-1" value={orientation} onChange={(e) => setOrientation(e.target.value)}>
                            <option value="portrait">Portrait</option>
                            <option value="landscape">Landscape</option>
                        </select>
                    </div>
                )}

                {
                    !imageUrl && (

                        <input type="file" accept="image/*" onChange={handleFileUpload} />
                    )
                }

                <br />
                <button onClick={convertToPdf} >
                    Convert to PDF
                </button>
            </div>
        </div>
    );
};

export default ImageToPdfConverter;
