interface AppProps {
    children: JSX.Element;
};

export default function Layout({ children }: AppProps): JSX.Element {
    return (
        <div>
            {children}
        </div>
    );
}