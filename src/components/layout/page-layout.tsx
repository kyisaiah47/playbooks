import { Header } from "./header";
import { Footer } from "./footer";

interface PageLayoutProps {
	children: React.ReactNode;
	includeHeader?: boolean;
	includeFooter?: boolean;
	includeHeaderPadding?: boolean;
}

export function PageLayout({ 
	children, 
	includeHeader = true, 
	includeFooter = true,
	includeHeaderPadding = true 
}: PageLayoutProps) {
	return (
		<div className="min-h-screen bg-background">
			{includeHeader && <Header />}
			
			{includeHeader && includeHeaderPadding && (
				<div className="pt-24" />
			)}
			
			{children}
			
			{includeFooter && <Footer />}
		</div>
	);
}