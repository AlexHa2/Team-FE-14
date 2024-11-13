import Footer from "../../clientComponent/Footer/Footer"
import Header from "../../clientComponent/Header/Header"
import "./LayoutHomepage.css"
import { Container } from '@mui/material'
export default function LayoutHomepage({ children }) {
    return (
        <>
            <Container maxWidth="xl">
                <Header />
                <div >
                {children}
                </div>
            </Container>
            <Footer />
        </>
    )
}
