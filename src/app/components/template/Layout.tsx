import { Container } from "../styles/Containers.styles"

const Layout = ({children}:any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Layout
