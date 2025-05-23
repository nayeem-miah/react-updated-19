export default function ReviewSection() {
    // Array of reviews
    const reviews = [
        {
            name: "John Doe",
            role: "Visitor",
            reviewText: "A wonderful Eid celebration. The website was easy to navigate and the countdown kept me excited!",
            image: "https://img.freepik.com/free-photo/young-brunet-man-wearing-white-t-shirt_273609-21720.jpg?t=st=1742293451~exp=1742297051~hmac=fd85a3a7b5be4f7a6bf01f7303671c2d64561e8ce33fda232115bb85703b7d57&w=1380",
        },
        {
            name: "Sara Smith",
            role: "Visitor",
            reviewText: "A festive experience! I loved the design and the interactive features of the website.",
            image: "https://img.freepik.com/free-photo/young-brunet-man-wearing-white-t-shirt_273609-21720.jpg?t=st=1742293451~exp=1742297051~hmac=fd85a3a7b5be4f7a6bf01f7303671c2d64561e8ce33fda232115bb85703b7d57&w=1380",
        },
        {
            name: "Ali Khan",
            role: "Visitor",
            reviewText: "Loved the countdown timer! It really brought the excitement of Eid closer!",
            image: "https://img.freepik.com/free-photo/handsome-cheerful-young-sportsman-has-sporty-body-muscular-arms-wears-white-mock-up-t-shirt-has-short-dark-hair-toothy-appealing-smile-stands-purple-wall-blank-copy-space-aside_273609-26661.jpg?t=st=1742293404~exp=1742297004~hmac=ba637c016e1c85e7bc753f1ebcc2254687cab80fef1ffd51e3dc796eb8702dc3&w=1380",
        },
        {
            name: "Ali Khan",
            role: "Visitor",
            reviewText: "Loved the countdown timer! It really brought the excitement of Eid closer!",
            image: "https://img.freepik.com/free-photo/satisfied-bearded-male-youngster-listens-merry-song-headphones-moves-pink-background-boosts-mood-with-cool-music-feels-upbeat-wears-red-hat-black-t-shirt_273609-34632.jpg?t=st=1742293351~exp=1742296951~hmac=4a71adc89551c4c7b35194248cb5ed29a48f8ad94ef5d8fae42042573dda8115&w=1380",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-yellow-300 to-orange-500 py-16 px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
                What Our Visitors Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="bg-white hover:bg-gray-100  p-6 rounded-lg shadow-lg w-full h-auto transform  transition duration-300 ease-in-out"
                    >
                        <p className="text-lg text-gray-700 mb-4">{review.reviewText}</p>
                        <div className="flex items-center justify-center space-x-2">
                            <img
                                src={review.image}
                                alt="Reviewer"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h4 className="text-xl font-semibold text-yellow-900">
                                    {review.name}
                                </h4>
                                <p className="text-sm text-gray-500">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}