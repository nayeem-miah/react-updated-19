const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-2xl text-gray-700">Oops! Page not found.</p>
            <a href="/" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">
                Go Home
            </a>
        </div>
    );
};

export default ErrorPage;