import React from 'react';
import PropTypes from "prop-types";
import './Profile.css'

const Profile = (props) =>{
    Profile.propTypes ={
        name : PropTypes.string,
        bio : PropTypes.string,
        profession : PropTypes.string,
        
    
    };
    Profile.defaultProps = {fullName :'Ashraf Ben Khemis',bio:'Student',profession:'Enginer'}
    alert('Hi'.concat(' ',props.fullName));
    return (
        <>

        <h1 style={{fontWeight:"bold"}}>{props.fullName}</h1>
        <h1>{props.bio}</h1>
        <h1>{props.profession}</h1>
        <img className="image" src="./Ashraf.png" alt="child"/>{props.children}
        
        </>
    );


}



export default Profile;