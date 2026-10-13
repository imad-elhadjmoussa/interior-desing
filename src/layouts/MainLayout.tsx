import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { WhatsappButton } from '../components/ui/WhatsappButton'

export function MainLayout() {
    const { pathname } = useLocation()
    const isProjectDetail = pathname.startsWith('/projects/')

    return (
        <div className="min-h-screen">
            <div className="absolute inset-x-0 top-0 z-50">
                <Navbar
                    contactHref="/"
                    homeHref="/"
                    projectsHref="/project"
                    light={isProjectDetail}
                />
            </div>
            <Outlet />
            <Footer />
            <WhatsappButton phoneNumber="+1234567890" message="Hi! I'd like to know more." />
        </div>
    )
}
