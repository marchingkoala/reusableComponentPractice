import React from 'react';
import PropTypes from 'prop-types'

const Container = ({image, variant = '', priorityTitle, duration, enableButton, secondaryTitle, createdBy}) => {
const styles = {
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
        fontFamily: "Noto Sans",
        fontWeight: '400',
        height: '20px',
        fontStyle: 'bold'
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
    }
  };

  return (
    <div className='container' style={styles.container}>
        <img src={image} style={styles.imgContainer} />
      <div className='summaryContainer' style={styles.summaryContainer}>
        {secondaryTitle && <p style={styles.pThin}>{secondaryTitle}</p>}
        <p style={styles.p}>{priorityTitle}</p>
        {duration && <p style={styles.p}>{duration}</p> }
        {createdBy && <p style={styles.pThin}>By. {createdBy}</p>}
        {!enableButton && <button style={styles.button}>Make it</button>}
      </div>
    </div>
  );
};

Container.prototypes = {
  image: PropTypes.string.isRequired,
  variant: PropTypes.string,
  priorityTitle: PropTypes.string.isRequired,
  duration: PropTypes.string,
  enableButton: PropTypes.bool,
  secondaryTitle: PropTypes.string,
  createdBy: PropTypes.string,
}
export default Container;