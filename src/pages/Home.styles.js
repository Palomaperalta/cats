export const homepage = (isLight) => ({
    backgroundColor: isLight ? 'white' : '#CFAFFF',
    color: isLight ? 'black' : 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 16px 0 16px'
})