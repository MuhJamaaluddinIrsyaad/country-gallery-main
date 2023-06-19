import Link from 'next/link';

export const Layout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<>
			<div className="p-4 shadow-xl flex justify-between gap-4 fixed top-0 left-0 w-full z-50 bg-white ">
				<Link className="text-4xl font-bold" href={'/'}>
					Norwood
				</Link>
				<div className="flex gap-2">
					<Link
						className="border border-black rounded-ful block py-2 px-6 rounded-full"
						href="/list"
					>
						Resort List
					</Link>
				</div>
			</div>
			{children}
			<footer className="py-16 px-8 shadow-md">
				<h4>Norwood</h4>
				<p>
					Norwood Interiors | Interior Designer | New York,
					USA
				</p>
				<p>40 West 25th Street, New York, NY 10010</p>
				<p>000-000-0000 | info@norwoodinteriors.com</p>
			</footer>
		</>
	);
};
