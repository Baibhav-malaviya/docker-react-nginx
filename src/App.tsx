const App: React.FC = () => {
	return (
		<div className="items-center justify-center w-full min-h-screen gap-5 bg-yellow-50">
			<h1 className="text-3xl text-violet-600">Hello world</h1>
			<p className="p-10 m-5 text-xl font-semibold text-center text-rose-500 bg-rose-50">
				WE are on <span className="text-lg italic">aws-ecr</span> and as-well-as{" "}
				<span className="text-lg italic">dockerHub</span>
			</p>
			<p className="p-10 m-5 text-xl font-semibold text-center text-rose-500 bg-rose-50">
				Resolving the push to aws-ecr issue v2
			</p>
		</div>
	);
};

export default App;
