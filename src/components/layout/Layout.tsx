import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";

interface AppProps {
    children?: JSX.Element;
};

export default function Layout({ children }: AppProps): JSX.Element {
    return (
        <div>
            <LayoutHeader/>
            {children}
            <LayoutFooter/>
        </div>
    );
}