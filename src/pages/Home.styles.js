export const homepage = (isLight) => ({
    backgroundColor: isLight ? 'white' : '#CFAFFF',
    color: isLight ? 'black' : 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '16px'
})