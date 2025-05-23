import banner from "../../assets/Banner.jpg";

export default function Banner() {
    return (
        <section>
            <div
                className="relative min-h-[170px] h-[500px] flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})` }}
            >
                <div className="  px-6 py-16 md:py-32 text-white">
                    <h1 className="lg:text-5xl font-bold sm:text-3xl text-4xl md:text-4xl xl:max-w-3xl text-yellow-400 drop-shadow-lg">
                        🌙 Eid Mubarak 2025 🎉
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-300 drop-shadow-md">
                        Celebrate this Eid with love, joy, and endless blessings. May your life be filled with happiness and prosperity!
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-yellow-500 text-white shadow-lg hover:bg-yellow-600">
                            Celebrate Now
                        </button>
                        <button className="px-8 py-3 m-2 text-lg border rounded border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}