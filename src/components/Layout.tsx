import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';



interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="content">

                <div className="main">{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
