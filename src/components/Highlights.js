import elementAdder from '../images/element-anuncio.png'
import styled from 'styled-components';

export default function Highlights() {
    return <Container>
        <img src={elementAdder } alt='anuncio'/>
    </Container>
}

const Container = styled.div `
    img {
        width: 100vw;
    }
`