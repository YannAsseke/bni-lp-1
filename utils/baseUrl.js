const baseUrl =
	process.env.NODE_ENV === "production"
		? "localhost"
		: "localhost";
export default baseUrl;