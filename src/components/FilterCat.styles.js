export const divinput = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    width: '100%',
    flexWrap: 'wrap',
    "@media (max-width: 440px)": {
        justifyContent: 'center',
    },
    select: {
        display: 'block',
        fontSize: '13px',
        fontFamily: 'Nunito Sans, sans-serif',
        width: '125px',
        cursor: 'pointer',
        height: '35px',
        borderRadius: '5px',
        fontWeight: 'bold',
        color: 'hsl(235, 24%, 19%)',
        border: '2px solid rgba(0,0,0,0.2)',
        marginBottom: '15px',
        boxShadow: '0 1px 0 1px rgba(0,0,0,.03)',
        ':hover':{
            borderColor: '#888',
        }
    }
}
export const input = {
    color: 'hsl(235, 24%, 19%)',
    fontFamily: 'Nunito Sans, sans-serif',
    borderRadius: '5px',
    marginBottom: '15px',
    width: '125px',
    maxWidth: '300px',
    height: '35px',
    fontSize: '13px',
    fontWeight: 'bold',
    outline: '2px solid rgba(0,0,0,0.2)',
    border: 0,
    padding: 0,
    boxShadow: '0 1px 0 1px rgba(0,0,0,.03)',
    ':hover':{
        borderColor: '#888',
    }
}
export const reset = {
    width: '125px',
    height: '35px',
    cursor: 'pointer',
    color:' hsl(235, 24%, 19%)',
    border: '2px solid rgba(0,0,0,0.2)',
    fontWeight: 'bold',
    ':hover':{
        borderColor: '#888',
    }
} 