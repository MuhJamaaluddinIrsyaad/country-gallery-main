export default function Page() {
	return (
		<main>
			<form className="m-auto flex flex-col w-fit p-40 gap-8">
				<input
					type="text"
					placeholder="Enter your Country name"
					className="border border-black w-[400px]"
				/>
				<button>SUBMIT</button>
			</form>
		</main>
	);
}
