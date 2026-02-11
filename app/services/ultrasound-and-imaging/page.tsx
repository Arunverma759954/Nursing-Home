import Image from "next/image";
import Link from "next/link";

export default function UltrasoundPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#701a2e] text-white overflow-hidden h-[300px] md:h-[400px] flex items-center">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for header image if available, overlaying color */}
                    <div className="absolute inset-0 bg-[#701a2e] opacity-90 z-10"></div>
                    {/* If there is a banner image, we could put it here */}
                    <Image
                        src="/raj/banner1.webp"
                        alt="Banner"
                        fill
                        className="object-cover object-top opacity-50"
                    />
                </div>
                <div className="container mx-auto px-4 z-20 relative h-full flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Ultrasound & Imaging - Ultrasound & Imaging in Hapur
                    </h1>
                    <nav className="text-sm md:text-base text-gray-200">
                        <Link href="/" className="hover:underline text-white">Home</Link> / Ultrasound & Imaging
                    </nav>
                </div>
                <div className="absolute right-0 bottom-0 h-full w-1/3 md:w-1/4 z-20 hidden md:block">
                    <Image
                        src="/raj/dr-Srishti.jpg"
                        alt="Doctor"
                        fill
                        className="object-cover object-top"
                        style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-screen-2xl mx-auto px-4 py-12 md:py-20 text-gray-700 space-y-12">

                {/* Intro */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#701a2e]">Ultrasound & Imaging in Hapur</h2>
                    <p className="leading-relaxed">
                        Modern healthcare relies on advanced diagnostic tools to assess and monitor health conditions with accuracy. Among these, ultrasound and imaging services are some of the most important for early diagnosis, treatment planning, and preventive care. If you are searching for ultrasound in Hapur, you can access a wide range of safe, affordable, and reliable imaging solutions designed to support patients and doctors alike.
                    </p>
                </div>

                {/* Section 1 */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#701a2e]">
                        Ultrasound & Imaging in Hapur: Your Guide to Comprehensive Care at Raj Nursing Home
                    </h2>
                    <p className="leading-relaxed">
                        Seeking a trusted source for reliable ultrasound and imaging services in Hapur? Well, you are at the right place! At Raj Nursing Home, we prioritize accurate and offered by for all our patients. Maintaining this approach from our team here is to ensure reliable ultrasound and diagnostic imaging center Hapur.
                    </p>
                </div>

                {/* Section 2: Image Left, Text Right */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/ultrasound.jpg"
                            alt="Ultrasound Importance"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#701a2e]">
                            Understanding the Basics of Ultrasound: What is the Importance?
                        </h2>
                        <p className="leading-relaxed text-sm md:text-base">
                            The term &quot;Ultrasound&quot; is quite common in the medical sphere and diagnostic world. The meaning is simple as the technology uses sound waves to give us the real-time internal structures in the form of images. However, the process is generally prepared on the exposed areas of the body.
                        </p>
                        <p className="leading-relaxed text-sm md:text-base">
                            The ultrasound helps patients and doctors in the medical exams to know whether there are any anomalies.
                        </p>
                        <p className="leading-relaxed text-sm md:text-base">
                            At Raj Nursing Home, modern ultrasound machines are there to perform different types of scans, starting from abdominal to focused pelvic ultrasound in Hapur. There is no radiation involved in this process that saves from the general enthusiasts later during disease.
                        </p>
                        <p className="leading-relaxed text-sm md:text-base">
                            In general, doctors prescribe tests an ultrasound for women are expecting to acquire the right information and condition of the fetus. In our clinic, our reliable and experts perform a thorough pregnancy scan in Hapur, ensuring the best vital marker and start while baby&apos;s safe during the stay.
                        </p>
                        <p className="leading-relaxed text-sm md:text-base">
                            We have organized the expert radiologists who serve the novice serious every time of testing. This makes Raj Nursing Home the best and most preferred diagnostic imaging center in Hapur. Ready to experience reliable and safe ultrasound in Hapur? Book your slot today for timely and assured results!
                        </p>
                    </div>
                </div>

                {/* Section 3: Pregnancy Scan */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#701a2e]">
                        Pregnancy Scan Hapur: Nurturing New Life with Confidence
                    </h2>
                    <p className="leading-relaxed">
                        An expectant couple can understand the importance of joy and emotions and the expense of genial pregnancy imaging. Therefore, choosing Raj Nursing Home is the best one can have kept sweet pregnancy scan Hapur can see.
                    </p>
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg text-black">
                            What do we actually do here for the lady who is expecting? The steps are as follows:
                        </h3>
                        <ul className="space-y-2 list-none pl-4">
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Determine the early signs of pregnancy.</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Monitor the growth of the fetus.</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Check amniotic fluid.</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Find out for congenital health concerns.</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span className="text-blue-500 text-xl">✓</span>
                                <span className="italic text-gray-600">Check the nuanced reports to support the family through the entire journey.</span>
                            </li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            At Raj Nursing Home, we just don&apos;t do the regular ultrasound, but ensure personal safety with the lady by counseling. Choose us for the gold standard of maternity care as a leading diagnostic imaging center in Hapur.
                        </p>
                    </div>
                </div>

                {/* Section 4: Pelvic Ultrasound - Text Left, Image Right */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#701a2e]">
                            Pelvic Ultrasound Hapur: Women&apos;s Health Under One Roof
                        </h2>
                        <p className="leading-relaxed text-sm md:text-base">
                            For women&apos;s pelvic health diagnostics, conducting a pelvic ultrasound is necessary. This technology helps the gynecologist to assess the problems with the reproductive tract or procedure. However, precision reliable pelvic ultrasound in Hapur is limited to a few.
                        </p>
                        <p className="leading-relaxed text-sm md:text-base">
                            After Raj Nursing Home, the diagnostic department is possible as our technicians are friendly and suggestions as early as women&apos;s burden and discomfort without any flaw.
                        </p>
                        <p className="leading-relaxed text-sm md:text-base">
                            With our reliable procedures, we ensure that a patient finds every possible guidance she needs related to fertility, gynecological surgery, or any typical festering scene.
                        </p>
                        <p className="leading-relaxed text-sm md:text-base">
                            Find reporting is always a major concern for many patients and their attendants. At Raj Nursing Home, we prioritize rich reporting, and our gynecologists assign a quick treatment plan for the betterment of an expectant couple. For clear and precise women&apos;s health questions, book a pelvic ultrasound in Hapur at Raj Nursing Home today!
                        </p>
                    </div>
                    <div className="relative h-[300px] md:h-[350px] w-full rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/ultrasound2.jpg"
                            alt="Pelvic Ultrasound Machine"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Section 5: Why Choose Us */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#701a2e]">
                        Why Choose Raj Nursing Home as Hapur’s Diagnostic Imaging Center?
                    </h2>
                    <p className="leading-relaxed">
                        Everyone wants to join a healthcare system where they can receive responsive and accessible health-related facilities at marginal pricing. Well, Raj Nursing Home is one of the best diagnostic imaging centers in Hapur that delivers premium care to its patients.
                    </p>
                    <div className="space-y-4">
                        <h3 className="font-bold text-xl text-black">
                            With a legacy of more than a decade, we
                        </h3>
                        <ul className="space-y-2 list-none pl-4">
                            {[
                                "Follow NABH-certified protocols,",
                                "Deliver patient-first service,",
                                "Appoint the best gynecologists in Hapur,",
                                "Offer full-suit imaging services apart from ultrasound (ECO, 2D Echo, X-ray)",
                                "Deliver advanced laboratory tests,",
                                "Provide 24/7 emergency care, and",
                                "Maintain transparent pricing"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-2 items-start">
                                    <span className="text-black font-bold">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="leading-relaxed mt-4 font-medium text-gray-800">
                            Trust your health with the experts! For reliable ultrasound and complete diagnostics in Hapur, choose Raj Nursing Home—your health partner for life.
                        </p>
                    </div>
                </div>

                {/* Conclusion Box */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Conclusion</h2>
                    <p className="leading-relaxed text-gray-600">
                        Whether it&apos;s your routine checkup, or you look for specialized imaging and pregnancy-based scans, Raj Nursing Home provides the best and unmatched level of diagnosis in Hapur. Now, no more worries about getting the best ultrasound in Hapur. With Raj Nursing Home, get in touch with accuracy, commitment, and privacy. Reach out to Raj Nursing Home for all your ultrasound and diagnostic needs in Hapur!
                    </p>
                </div>

            </div>
        </div>
    );
}
