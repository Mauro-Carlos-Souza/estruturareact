import { Container, ListItem } from "./styles";

interface Props {
    title?: string,
    name?: string
}

function Header({ title, name}: Props){
    return(
        <Container>
            <ListItem active={true}>Home</ListItem>
            <ListItem active={false}>Contato</ListItem>
            <ListItem active={false}>Fotos</ListItem>
        </Container>
    )
}

export default Header;
