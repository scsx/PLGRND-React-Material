import "./scss/App.scss"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

function App() {
    return (
        <div className='App'>
            <h1>Os elementos HTML de cabeçalho da secção</h1>
            <p>Os elementos HTML representam seis níveis de título de seção. H1 é o nível de seção mais alto e é o mais baixo.</p>
            <header className='App-header'>
                {/* <img src={logo} className='App-logo' alt='logo' /> */}
                <Button variant='contained' color='primary'>
                    Hello World
                </Button>
                <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </header>
        </div>
    )
}

export default App
