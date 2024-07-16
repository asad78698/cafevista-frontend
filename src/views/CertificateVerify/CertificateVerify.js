import React, { useState } from 'react';
import './CertificateVerify.css';
import Final from '../../assets/Final-2.png';

const CertificateVerification = () => {
    const [certificateID, setCertificateID] = useState("");
    const [certificateDetails, setCertificateDetails] = useState(null);
    const [isVerified, setIsVerified] = useState(false);

    const checkCertificate = async () => {
        try {
            const response = await fetch('https://cafevista-backend.vercel.app/verifyCertificate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ certificateID }),
            });

            const data = await response.json();
            if (response.ok) {
                setCertificateDetails(data);
                setIsVerified(true);
                console.log(data);
            } else {
                alert("Certificate not found");
                setIsVerified(false);
            }
        } catch (error) {
            console.error('Error fetching certificate:', error);
        }
    };

    return (
        <div className="container p-5 mainDiv">
            <header className='p-2 certHeader'>
                <img src={Final} alt="Cafevist@ Logo" className="logo" />
                <h1 className='mb-2'>Certificate Verification</h1>
            </header>
            <input
                value={certificateID}
                onChange={(e) => setCertificateID(e.target.value)}
                type="text"
                placeholder="Enter Certificate ID"
            />
            <button onClick={checkCertificate}>Verify</button>
            <main>
                {isVerified && certificateDetails && (
                    <>
                        <div className="certificate-details mt-2 ">
                            <h2 className='text-center'>Certificate Details</h2>
                            <hr />
                            <p><strong>Recipient Name:</strong> {certificateDetails.RecipientName}</p>
                            <hr />
                            <p><strong>Certificate ID:</strong> {certificateDetails.Certificate_ID}</p>
                            <hr />
                            <p><strong>Internship Period:</strong> {certificateDetails.Internship_Period}</p>
                            <hr />
                            <p><strong>Position:</strong> {certificateDetails.Position}</p>
                            <hr />
                            <p><strong>Issuer:</strong> {certificateDetails.Issuer}</p>
                            <hr />
                            <p><strong>Certificate Type:</strong> {certificateDetails.Certificate_Type}</p>
                        </div>
                        <div className="verification-message p-1 mt-2">
                            <p>This certificate is valid and has been issued by Cafevist@.</p>
                        </div>
                        <div className="verification-date">
                            <p><strong>Verification Date:</strong> {new Date().toLocaleDateString()}</p>
                        </div>
                    </>
                )}
            </main>
            <footer className='p-2'>
                <p>For further assistance, please contact us at <a href="mailto:support@cafevistaai.com">support@cafevistaai.com</a></p>
            </footer>
        </div>
    );
};

export default CertificateVerification;
