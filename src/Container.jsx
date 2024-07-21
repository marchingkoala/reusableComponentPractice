import React from 'react';
import PropTypes from 'prop-types'

// styles function that accept 'variant' as an argument to determine css element styles
const styles = (variant)=> ({
container:{
        display: 'flex',
        flexDirection: variant ? 'row': 'column',
        width: variant ? '372px':'249px',
    },
    imgContainer:{
        width: variant ? '141px' : '249px',
        height: variant ? '89px' : '218px' 
    },
    summaryContainer:{
        maxHeight: '89px',
        width: variant && '231px',
        backgroundColor: variant ? 'rgba(239, 239, 239, 1)' : 'rgba(226, 238, 239, 1)',
        padding: '10px',
        overFlow: 'hidden',
        textAlign: variant && 'left'
    },
    p:{
        margin: '0px',
        color: 'black',
        fontSize: '13pt',
        fontWeight: '400',
        height: '20px',
        fontStyle: 'bold',
        lineHeight: 'normal'
    },
    button:{
        width: '229px',
        height: '24px',
        borderRadius: '45',
        fontSize: '14px',
        padding: '0',
        marginTop: '5px',
        backgroundColor: 'rgba(2, 38, 106, 1)'
    },
    pThin:{
        margin: '0px',
        color: 'black',
        fontSize: '10pt',
        fontFamily: "Noto Sans",
        fontWeight: '200',
        height: '20px'
    }}
  );

// Container component that accept props from its parent
const Container = ({image, variant = '', priorityTitle, duration, enableButton = true, secondaryTitle, createdBy, altDescription,}) => {
    //calls styles function with variant prop, destructure the variables
    const { container, imgContainer, summaryContainer, p, pThin, button} = styles(variant)

  return (
    <div className='container' style={container}>
        <img src={image} style={imgContainer} alt={altDescription}/>
      <div className='summaryContainer' style={summaryContainer}>
        {variant && <p style={pThin}>{secondaryTitle}</p>}
        <p style={p}>{priorityTitle}</p>
        {duration && <p style={p}>{duration}</p> }
        {variant && <p style={pThin}>By. {createdBy}</p>}
        {enableButton == true && <button style={button}>Make it</button>}
      </div>
    </div>
  );
};

Container.propTypes = {
  image: PropTypes.string.isRequired,
  variant: PropTypes.string,
  priorityTitle: PropTypes.string.isRequired,
  duration: PropTypes.string,
  enableButton: PropTypes.bool,
  secondaryTitle: PropTypes.string,
  createdBy: PropTypes.string,
  altDescription: PropTypes.string
}
export default Container;