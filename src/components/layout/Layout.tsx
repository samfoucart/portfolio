import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";
import './Layout.css';

interface AppProps {
    children?: JSX.Element;
};

export default function Layout({ children }: AppProps): JSX.Element {
    return (
        <div className="layout">
            <LayoutHeader/>
            {children}
            <LayoutFooter/>
        </div>
    );
}