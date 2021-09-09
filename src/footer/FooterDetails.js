import React from 'react';
import './footer.css'
const FooterDetails = ({ icon, title, description }) => {
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-12 my-4">
                <div className="content">
                    <p className="text-center" > {icon}</p>
                    <h5 className="text-center" >{title}</h5>
                    <p className="text-center" >{description}</p>
                </div>
            </div>
        </>
    );
};

export default FooterDetails;