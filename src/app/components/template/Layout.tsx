import { Container } from "../ui/molecules/containers/Container.styles"

const Layout = ({children}:any) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Layout
