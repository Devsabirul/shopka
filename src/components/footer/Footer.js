import React from 'react';
import FooterDetails from './FooterDetails';
import BrushIcon from '@material-ui/icons/Brush';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import ColorLensIcon from '@material-ui/icons/ColorLens';
const Footer = () => {
    return (
        <>
            <div className="row">
                <FooterDetails icon={<BrushIcon style={{ color: "rgb(40, 88, 0)", fontSize: "40px" }} />} title="Clear & Usable user flows" description="Let's boost your marketplace" />
                <FooterDetails icon={<SmokingRoomsIcon style={{ color: "rgb(32, 91, 158)", fontSize: "40px" }} />} title="Fine & Styled components" description="Speed up with Outproduce Templates" />
                <FooterDetails icon={<ColorLensIcon style={{ color: "rgb(145, 60, 145)", fontSize: "40px" }} />} title="Customizable & Reusable" description="Take our UX patterns and rebuild" />
            </div>
        
        </>
    );
};

export default Footer;