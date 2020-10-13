import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {main: '#EAE7DC'},
        secondary: {main: '#D8C3A5'},
        text: {primary: '#000000',
                secondary: '#EE8845',}
    },
    typography: {
        h1: {
            textTransform: "uppercase",
            color: '#EE8845'},
        h2: {
            textTransform: 'uppercase',
            fontSize: '1.85rem',
            color: 'white'
        },
        h3: {
            fontSize: '1.65rem',
            color: 'white'
        },
        h4: {
            fontSize: '3rem',
            textTransform: 'uppercase',
            color: '#EE8845',
        }
    }
})

export default theme;