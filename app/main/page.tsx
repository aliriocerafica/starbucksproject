"use client";
import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image"; // Import Image for handling images

export default function Home() {
    return (
        <div>
            <Navbar />
            {/* Jumbotron Section with Background Image */}
            <div
                className="relative bg-cover bg-center h-[640px] w-full"
                style={{ backgroundImage: "url('/img/starbucks2.png')" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
                <div className="absolute inset-0 flex justify-center items-center text-white z-10">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Starbucks</h1>
                        <p className="text-xl mb-6">Enjoy your favorite coffee and treats</p>
                        <Link
                            href="/menu"
                            className="bg-[#00704A] text-white px-6 py-3 rounded-full text-lg hover:bg-[#004c2d]"
                        >
                            Explore Our Menu
                        </Link>
                    </div>
                </div>
            </div>

            {/* Additional content below */}
            <div className="p-6 bg-[#FFF8F3] h-[300] text-center flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl mb-4 text-black">
                    Our Mission
                </h1>
                <p className="text-gray-500">To inspire and nurture the human spirit one person, one cup and one neighborhood at a time.</p>
            </div>

            <div className="p-6 bg-white   text-center flex flex-col justify-center items-center ">
                <h1 className="font-bold text-3xl mb-4 text-black">Our Values</h1>

                {/* Grid Container for Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-36 pt-10">
                    {/* Column 1: Coffee Excellence */}
                    <div className="flex flex-col items-center w-45">
                        <Image
                            src="/img/leaf.png" // Path to leaf image
                            alt="Leaf Icon"
                            width={32}
                            height={32}
                            className="mb-3"
                        />
                        <h3 className="font-semibold text-lg text-black">Coffee Excellence</h3>
                        <p className="text-gray-600">We're passionate about
                            ethically sourcing only
                            the finest Arabica
                            coffee beans and
                            roasting them with
                            great care.</p>
                    </div>

                    {/* Column 2: Human Connections */}
                    <div className="flex flex-col items-center w-45">
                        <Image
                            src="/img/frame.png" // Path to globe image
                            alt="Globe Icon"
                            width={32}
                            height={32}
                            className="mb-3"
                        />
                        <h3 className="font-semibold text-lg text-black">Human Connections</h3>
                        <p className="text-gray-600">Making a difference in
                            people's lives by
                            serving the perfect cup
                            of coffee and creating
                            a warm, welcoming
                            environment.</p>
                    </div>

                    {/* Column 3: Global Responsibilities */}
                    <div className="flex flex-col items-center w-45">
                        <Image
                            src="/img/heart.png" // Path to heart image
                            alt="Heart Icon"
                            width={32}
                            height={32}
                            className="mb-3"
                        />
                        <h3 className="font-semibold text-lg text-black">Global Responsibilities</h3>
                        <p className="text-gray-600">Committed to ethical
                            business practices and
                            supporting local
                            communities while
                            minimizing our
                            environmental impact.</p>
                    </div>

                    {/* Column 4: Sustainability */}
                    <div className="flex flex-col items-center w-45">
                        <Image
                            src="/img/leaf.png" // You can change this to another image if needed
                            alt="Leaf Icon"
                            width={32}
                            height={32}
                            className="mb-3"
                        />
                        <h3 className="font-semibold text-lg text-black">Sustainability</h3>
                        <p className="text-gray-600">Leading the industry in
                            sustainable practices,
                            from bean to cup,
                            ensuring a better
                            future for coffee
                            farmers and our planet.</p>
                    </div>


                </div>

            </div>
            <div className="p-6 bg-[#FFF8F3] flex flex-col justify-center items-center">
    <div className="w-full text-center">
        <h1 className="font-bold text-3xl mb-18 mt-12 text-black">Our Journey</h1>
    </div>

    {/* Stack layout for 4 rows with responsive design */}
    <div className="space-y-8 w-full max-w-4xl mx-auto">  {/* Added max-w-4xl and mx-auto for centering */}
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row items-start sm:space-x-14 space-y-4 sm:space-y-0">
            <span className="font-extrabold text-[#00704A] sm:mr-14">1971</span>
            <div className="flex flex-col">
                <span className="font-semibold text-lg text-black">First Open</span>
                <p className="text-gray-600">We started with a single coffee shop in Seattle, and our journey began there.</p>
            </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row items-start sm:space-x-14 space-y-4 sm:space-y-0">
            <span className="font-extrabold text-[#00704A] sm:mr-12">1980s</span>
            <div className="flex flex-col">
                <span className="font-semibold text-lg text-black">Expanding Globally</span>
                <p className="text-gray-600">We expanded to multiple countries, sharing our love for coffee and connection worldwide.</p>
            </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col sm:flex-row items-start sm:space-x-14 space-y-4 sm:space-y-0">
            <span className="font-extrabold text-[#00704A] sm:mr-12">1990s</span>
            <div className="flex flex-col">
                <span className="font-semibold text-lg text-black">Sustainability Focus</span>
                <p className="text-gray-600">We started focusing on sustainable sourcing and environmental responsibility.</p>
            </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col sm:flex-row items-start sm:space-x-14 space-y-4 sm:space-y-0">
            <span className="font-extrabold text-[#00704A] sm:mr-12">2000s</span>
            <div className="flex flex-col">
                <span className="font-semibold text-lg text-black">Our Community</span>
                <p className="text-gray-600">We believe in nurturing relationships with our communities and giving back.</p>
            </div>
        </div>
    </div>
</div>



        </div>
    );
}
