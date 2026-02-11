"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, Facebook, Twitter, Linkedin, CheckCircle2, User } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "Diabetes & Thyroid Clinic in Hapur",
        date: "13-11-2025",
        image: "/Thyroid.jpg",
        slug: "diabetes-thyroid-clinic-hapur"
    },
    {
        id: 2,
        title: "Best Gynaecologist in Hapur",
        date: "21-06-2025",
        image: "/Diagnostic.jpg",
        slug: "best-gynecologist-hapur"
    },
    {
        id: 3,
        title: "गर्भावस्था में अल्ट्रासाउंड क्यों जरूरी है? हापुड़ की महिलाओं के लिए गाइड",
        date: "19-06-2025",
        image: "/india-doctor.jpg",
        slug: "pregnancy-ultrasound-guide-hindi"
    },
    {
        id: 4,
        title: "Laproscpic in Hapur",
        date: "15-06-2025",
        image: "/laparoscopic.jpg",
        slug: "laparoscopic-hapur"
    },
    {
        id: 5,
        title: "Ultrasound in Hapur – Advanced Diagnostic Services at Raj Nursing Home",
        date: "15-06-2025",
        image: "/ultrasound.jpg",
        slug: "ultrasound-advanced-diagnostic-hapur"
    }
];

const postData = {
    "diabetes-thyroid-clinic-hapur": {
        title: "Diabetes & Thyroid Clinic in Hapur",
        image: "/Thyroid.jpg",
        content: (
            <div className="space-y-8 text-gray-700 leading-relaxed font-medium text-lg">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                    Introduction – The Finest Diabetes & Thyroid Clinic in Hapur
                </h2>
                <p>Believe the best and that diabetes and thyroid issues have best treatment with us. If you're everything is fine for any guidance visit our medical institution and take early early treatment guidance and heart treatment from our best experts for these problems.</p>
                <p>We specialized with the systematic analysis, diagnosis, evaluation, and treatments of diabetes and thyroid. We monitor and manage your treatment and health by our expert team. please share your full medical records from our experienced doctors. We help in proper disease management and a whole lot of help to keep yourself and your diabetes treatment in Hapur.</p>
                <p>At Raj Nursing Home, we deal with your diabetes treatment, thyroid care, and hormonal health. Point, many specialties in Hapur take patients for various age groups, starting from children to senior citizens.</p>
                <p>List the correct problems to help sense of disease and take any of proper treatment. However the motto of our at Raj Nursing Home to starting the best in diabetes treatment in Hapur.</p>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 pt-4">"We Are Focused on Core Services" – The Motto of Raj Nursing Home</h3>
                <p>Raj nursing home has a meaning behind because those services provide always message to the world.</p>

                <h3 className="text-3xl font-bold text-[#800020] pt-6">1. Diabetes Treatment in Hapur</h3>
                <p>At Raj Nursing Home, our specialist physician examines every patient, making sure the patient is given the proper treatment in return. The treatment for we provide including below the following areas of our best:</p>
                <ul className="space-y-3 pl-6 list-disc marker:text-[#800020]">
                    <li>Blood sugar test levels.</li>
                    <li>Insulin monitoring.</li>
                    <li>Personalized medication management plans.</li>
                </ul>
                <p>Specialist physician examine every patient, making sure the patient is given the proper treatment in return. The treatment includes: Training for the treatment throughout the treatment. Setting slow goals according to the reports. Poor healing management strategies. Need to take charge of your disease? Schedule a check-up and visit us at Raj Nursing Home the best center for diabetes treatment in Hapur.</p>

                <h3 className="text-3xl font-bold text-[#800020] pt-6">2. Thyroid Treatment in Hapur</h3>
                <p>At Raj Nursing Home, our expert specialist physician examines and understand how to manage the following conditions:</p>
                <ul className="space-y-3 pl-6 list-disc marker:text-[#800020]">
                    <li>Hyperthyroidism.</li>
                    <li>Hypothyroidism.</li>
                    <li>Thyroid nodules.</li>
                    <li>Thyroid cancer.</li>
                </ul>
                <p>Our highly qualified endocrine doctors assess every case and provide customized solution for every physical disorder after the necessary examination by our expert experts and specialists. We provide proper and best therapy only after the final reports. Call us today and talk about your thyroid health. Booker slots at Raj Nursing Home for a proper consultation with leading specialists in Hapur.</p>

                <h3 className="text-3xl font-bold text-gray-900 pt-8">Why Raj Nursing Home for Thyroid and Diabetes Treatment in Hapur?</h3>
                <p>We understand every result, symptom, and treatment assessment of thyroid and diabetes issues you are facing, our first priority is taking care for our patients. Our multidisciplined approach combines when with skilled specialists, surgeons, and nutritionists to provide any level service.</p>
                <div className="grid gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                    <p><strong>Personalized Manifestations and Meetings:</strong> We treat patients above their thoughts and work accordingly to provide personalized services.</p>
                    <p><strong>Individualized Treatment:</strong> Every patient gets the right treatment matching their condition for medication, including diabetes and thyroid.</p>
                    <p><strong>Age Group Focus:</strong> Doctors at Raj Nursing Home are experts in endocrinology, treating patients of all ages.</p>
                    <p><strong>Advanced Diagnostic Services:</strong> We use advanced tools, testing methods, and procedures to identify diseases and provide treatment based on studies' edition.</p>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 pt-8">Conclusion</h3>
                <p>Towards the way towards becoming happier and healthier, visit Raj Nursing Home for top-level and essential treatment in Hapur.</p>

                <h3 className="text-2xl font-bold text-gray-900 pt-8">FAQs</h3>
                <div className="space-y-6">
                    {[
                        { q: "What types of diabetes are treated at Raj Nursing Home?", a: "Our doctors treat all types, including: Type 1 diabetes, Type 2 diabetes, Gestational diabetes." },
                        { q: "Why do we appoint an experienced sugar specialist in Hapur?", a: "In our clinic, we appoint only certified and experienced endocrine doctors to treat our patients effectively." },
                        { q: "What role do endocrine doctors play?", a: "The certified and reliable endocrine specialists from Raj Nursing Home treat all types of: Hormone-related issues, Thyroid disorders, Diabetes, Adrenal problems." },
                        { q: "What’s the easiest way to book an appointment at Raj Nursing Home?", a: "Patients in Hapur or nearby locations can call us directly for a reservation with our specialists. You can also visit our website and book your appointment effortlessly." },
                        { q: "Is diabetes treatment in Hapur expensive?", a: "No. Raj Nursing Home provides treatment in a budget-friendly way. We offer premium disease care, physicians' treatment, and medical treatment at reasonable cost in Hapur." }
                    ].map((faq, i) => (
                        <div key={i} className="space-y-2">
                            <p className="font-bold text-gray-900">{faq.q}</p>
                            <p className="pl-4 border-l-4 border-[#800020] text-gray-700">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    "best-gynecologist-hapur": {
        title: "Best Gynaecologist in Hapur",
        image: "/Diagnostic.jpg",
        content: (
            <div className="space-y-8 text-gray-700 leading-relaxed font-medium text-lg">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                    Visit Dr. Srishti Bhardwaj – Renowned as the Best Gynaecologist in Hapur for Advanced Obstetrics, Gynaecology, and Infertility Treatment
                </h2>
                <p>When it comes to women's health, finding a trusted and experienced gynaecologist can make all the difference. In Hapur, Dr. Srishti Bhardwaj stands out as a beacon of excellence in the fields of obstetrics, gynaecology, and infertility treatment. With years of dedicated service, compassionate care, and modern medical expertise, Dr. Bhardwaj is widely regarded as the best gynaecologist in Hapur.</p>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 pt-4 underline decoration-[#800020]">Why Choose Dr. Srishti Bhardwaj?</h3>
                <ul className="space-y-4">
                    {[
                        { t: "Comprehensive Women's Healthcare Under One Roof", d: "From adolescence to menopause, Dr. Srishti Bhardwaj provides a full spectrum of gynaecological services." },
                        { t: "Expertise in Infertility Treatment", d: "Couples struggling to conceive find hope with her personalized infertility evaluations and advanced treatment plans." },
                        { t: "Modern Obstetric Care", d: "Ensuring a safe and healthy pregnancy journey for both mother and child with high-risk pregnancy management." },
                        { t: "Advanced Gynaecological Treatments", d: "Specializing in minimally invasive surgeries, PCOS management, and hormonal health." }
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                            <CheckCircle2 className="w-6 h-6 text-[#800020] shrink-0 mt-1" />
                            <div>
                                <p className="font-bold text-gray-900">{item.t}</p>
                                <p className="text-gray-600">{item.d}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <h3 className="text-2xl md:text-3xl font-black text-gray-900 pt-4 underline decoration-[#800020]">Conditions Treated by Dr. Srishti Bhardwaj</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Menstrual irregularities and PCOS/PCOD",
                        "Uterine fibroids and cysts",
                        "High-risk pregnancies",
                        "Menopause and hormonal issues",
                        "Infertility evaluation and treatment",
                        "Vaginal infections and STIs",
                        "Cervical screening (Pap smear, HPV)",
                        "Family planning and contraception advice"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:bg-rose-50 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-[#800020]"></div>
                            <span className="font-bold text-gray-700">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-[#800020]/5 p-8 rounded-[2rem] border-l-8 border-[#800020] mt-12">
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Book Your Appointment Today</h3>
                    <p className="font-semibold mb-6">Ensure the best care for your reproductive and overall women's health by scheduling a consultation with Dr. Srishti Bhardwaj, the leading gynaecologist in Hapur.</p>
                    <Link href="/contact" className="inline-block bg-[#800020] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-black transition-all">
                        Schedule Consultation
                    </Link>
                </div>
            </div>
        )
    },
    "pregnancy-ultrasound-guide-hindi": {
        title: "गर्भावस्था में अल्ट्रासाउंड क्यों जरूरी है? हापुड़ की महिलाओं के लिए गाइड",
        image: "/india-doctor.jpg",
        content: (
            <div className="space-y-10 text-gray-700 leading-relaxed font-medium text-lg">
                <div className="bg-rose-50 p-8 rounded-3xl border-2 border-rose-100 italic">
                    <p className="text-2xl font-bold text-gray-900 leading-snug">
                        डॉ. सुष्टि भारद्वाज बताती हैं 'हापुड़ में 30% गर्भपात देर से जाँच के कारण होते हैं। ये 3 स्कैन जीवन रक्षक हैं:'
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { t: "6-8 सप्ताह", d: "भ्रूण की धड़कन की पुष्टि" },
                        { t: "18-20 सप्ताह", d: "अंग विकास जाँच" },
                        { t: "32 सप्ताह", d: "प्रसव/डिलीवरी की सही योजना" }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm border-b-4 border-b-[#800020]">
                            <p className="text-[#800020] font-black text-xl mb-2">{item.t}</p>
                            <p className="font-bold text-gray-700">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-gray-900 border-b-2 border-[#800020] pb-2 inline-block">RNH की उन्नत सुविधाएँ</h3>
                        <ul className="space-y-3">
                            {["HD रंगीन अल्ट्रासाउंड", "नवनियुक्तों का 100% सटीक रिकॉर्ड", "भ्रूण के स्वास्थ्य की 4D स्क्रीनिंग"].map((li, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]"></div>
                                    {li}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-gray-900 border-b-2 border-[#800020] pb-2 inline-block">हाई-रिस्क प्रेग्नेंसी केयर</h3>
                        <ul className="space-y-3">
                            {["24/7 महिला चिकित्सक", "आपातकालीन प्रसव कक्ष (डिलीवरी सुविधा)"].map((li, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]"></div>
                                    {li}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                    <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                        <User className="text-[#800020]" /> वास्तविक रोगी कहानी
                    </h3>
                    <p className="font-bold text-gray-700 leading-relaxed">
                        सीमा (हापुड़ से), 32 वर्ष में डॉ. सुष्टि के पास समय पर चेकअप के लिए आई। उनकी विशेष स्वास्थ्य योजना से सामान्य प्रसव हुआ। RNH टीम ने माँ और बच्चे की बेहतरीन देखभाल की।
                    </p>
                </div>

                <div className="space-y-8">
                    <h3 className="text-3xl font-black text-gray-900">पोषण योजना</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { l: "सुबह", v: "दूध + फल (आयरन आहार)" },
                            { l: "दोपहर", v: "हरी पत्तेदार सब्जियां (दाल, चावल)" },
                            { l: "रात", v: "मूंग दाल खिचड़ी (हल्की और आसान)" }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100">
                                <span className="block text-sm font-black text-[#800020] uppercase tracking-widest mb-2">{item.l}</span>
                                <p className="font-bold text-gray-800">{item.v}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-200">
                    <h3 className="text-2xl font-black text-orange-900 mb-4">न करें</h3>
                    <ul className="space-y-3 text-orange-800 font-bold">
                        <li>• भारी सामान उठाना (खासकर कमर बांधने वाली महिलाएँ)</li>
                        <li>• कीटनाशकों के पास खड़े होना (कृषि क्षेत्रों में)</li>
                    </ul>
                </div>

                <div className="bg-gray-900 text-white p-10 rounded-[3rem] shadow-2xl space-y-6">
                    <h3 className="text-2xl font-black text-rose-300">डॉ. सुष्टि/डॉ. विपीन शर्मा (स्त्री रोग विशेषज्ञ) से संपर्क करें</h3>
                    <p className="text-lg opacity-90 font-medium">राज नर्सिंग होम, पुरानी चुंगी (हॉस्पिटल के पास), मोदीनगर रोड, हापुड़ (भारत)।</p>
                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                        <div className="bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
                            <span className="text-rose-200 text-sm font-bold block">समय</span>
                            <span className="font-black">10 - 2 PM (सोमवार - शनिवार)</span>
                        </div>
                        <div className="bg-[#800020] px-6 py-3 rounded-2xl">
                            <span className="text-rose-200 text-sm font-bold block">संपर्क</span>
                            <span className="font-black text-xl">7831818111</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    "laparoscopic-hapur": {
        title: "Laproscpic in Hapur",
        image: "/laparoscopic.jpg",
        content: (
            <div className="space-y-8 text-gray-700 leading-relaxed font-medium text-lg">
                <h3 className="text-2xl font-black text-gray-900">Why do we use it?</h3>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        )
    },
    "ultrasound-advanced-diagnostic-hapur": {
        title: "Ultrasound & Imaging – Ultrasound & Imaging in Hapur",
        image: "/ultrasound.jpg",
        content: (
            <div className="space-y-12 text-gray-700 leading-relaxed font-medium text-lg">
                <section className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">Ultrasound & Imaging in Hapur</h2>
                    <p>Modern healthcare relies on advanced diagnostic tools to assess mental health conditions with accuracy. Among these, ultrasound and imaging services are some of the most important for early diagnosis, treatment planning, and preventive care. If you are searching for ultrasound in Hapur, you can access a wide range of safe, affordable, and accurate imaging solutions designed to support your health and well-being.</p>
                </section>

                <section className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">Ultrasound & Imaging in Hapur: Your Guide to Comprehensive Care at Raj Nursing Home</h3>
                    <p>Seeking a trusted source for reliable ultrasound and imaging services in Hapur? Well, she comes at the right place at Raj Nursing Home. Here we prioritize trust and affordability for all our patients. additionally, the support of our dedicated team, who are keen to deliver accurate results for both fetal imaging and robotic prenatal health essentials. it is directed towards the right ultrasound services at reliable and safe ultrasound and diagnostic imaging center Hapur.</p>
                </section>

                <section className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 p-8 rounded-[3rem] border border-gray-100 italic">
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                        <Image src="/ultrasound.jpg" alt="Ultrasound Basics" fill className="object-cover" />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-black text-gray-900 not-italic">Understanding the Basics of Ultrasound: What is the Importance?</h3>
                        <p>The term 'ultrasound' is quite common in the medical sector and diagnostic areas. The meaning is simple; as the technology uses sound waves to produce the real-time images of any part in the human body. However, the process is generally projected on the assessed areas of the body.</p>
                        <p className="text-rose-900 font-bold">The ultrasound helps perform and assess the internal abnormal disorder areas within efficient healthcare flow.</p>
                    </div>
                </section>

                <p>At Raj Nursing Home, modern ultrasound machines allow accurate solutions to perform different types of scans, starting from abdominal to focused pelvic ultrasound in Hapur. There is the individual interest in the pregnant lady about her doctors and care centers during the days.</p>

                <p>In general, doctors prescribe obstetric ultrasound for women who are expecting to stay with the right information and condition of the fetus. In fact, all the our ultrasound doctors performs a healthy pregnancy scan in Hapur, ensuring the health of the mother and their child safe health during the days. We have expertised the expert radiologists and leading physician conduct every level of testing. This makes Raj Nursing Home one best units listed for prenatal diagnostic imaging center in Hapur. Ready to experience reliable and safe ultrasound in Hapur? Book your slot today for timely and accurate results!</p>

                <section className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900">Pregnancy Scan Hapur: Nurturing New Life with Confidence</h3>
                    <p>An expectant many women understand the importance of prenatal healthcare and the diagnosis of gentle pregnancy, healthy. Therefore, choosing Raj Nursing Home is the best who delivered best pregnancy scan Hapur services.</p>

                    <div className="bg-[#800020] text-white p-8 rounded-[2.5rem] shadow-xl space-y-6">
                        <h4 className="text-xl font-black">What do we actually do here for the lady who is expecting? The steps are as follows:</h4>
                        <ul className="space-y-4">
                            {[
                                "Determine the early signs of pregnancy.",
                                "Monitor the growth of the fetus.",
                                "Check amniotic fluid.",
                                "Find out the congenital levels concern.",
                                "Check the essential reports to support the family through the entire journey."
                            ].map((text, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="font-bold text-rose-300 mt-1">✓</span>
                                    <span className="font-bold">{text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-rose-100 text-sm font-bold pl-6 italic uppercase tracking-wider">At Raj Nursing Home, we accommodate the regular ultrasounds but ensure patient safety with the baby's well-being. Choose us for the gold standard of maternity care at leading diagnostic imaging center in Hapur.</p>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900">Pelvic Ultrasound Hapur: Women's Health Under One Roof</h3>
                        <p>For women's gentle health during today, conducting a pelvic ultrasound is necessary. This technology help take any adaptations to assess the problems with the measurement physical area. However, a reliable pelvic ultrasound in Hapur is the need under our line.</p>
                        <p>At Raj Nursing Home, the diagnostic treatment is healthcare at our institutions and frankly our suggestions take only at the patient's budget and elsewhere without any flaw.</p>
                        <p>With our advanced procedures, we ensure a uniform treatment positive outcome correctly the results make any adaptations in major female diseases like fibroid.</p>
                        <p className="font-bold border-l-4 border-[#800020] pl-6">Prioritizing healthcare and helps our women patients with their care demands. At Raj Nursing Home we prioritize the logic of any gynecologist health or gynae necessities plan for the assessment of an expectant mother. For clear and accurate women's health question; book a pelvic ultrasound in Hapur at Raj Nursing Home today!</p>
                    </div>
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                        <Image src="/ultrasound2.jpg" alt="Pelvic Ultrasound" fill className="object-cover" />
                    </div>
                </section>

                <section className="space-y-8 pt-10 border-t border-gray-100">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Why Choose Raj Nursing Home as Hapur's Diagnostic Imaging Center?</h3>
                    <p>Everyone wants to join a healthcare system where they can receive responsive and accessible health-related facilities at marginal pricing. Well, Raj Nursing Home is one of the best diagnostic imaging centers in Hapur that delivers premium care to its patients.</p>

                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">With a legacy of more than a decade, we</h4>
                        <ul className="space-y-2">
                            {[
                                "Follow NABH certified protocols,",
                                "Deliver patient first service,",
                                "Appoint the best gynecologists in Hapur,",
                                "Offer full suit imaging services apart from ultrasound (ECD, 2D Echo, X ray)",
                                "Deliver advanced laboratory tests,",
                                "Provide 24/7 emergency care, and",
                                "Maintain transparent pricing"
                            ].map((text, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="font-bold text-gray-900 mt-1">✓</span>
                                    <span className="text-gray-900 font-bold">{text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="font-bold text-gray-900 pt-4">Trust your health with the experts! For reliable ultrasound and complete diagnostics in Hapur choose Raj Nursing Home—your health partner for life.</p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm mt-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Conclusion</h2>
                        <div className="space-y-4 text-gray-700 text-lg font-bold leading-relaxed">
                            <p>Whether it's your routine checkup, or you look for specialized imaging and pregnancy-based scans, Raj Nursing Home provides the best and unmatched level of diagnosis in Hapur.</p>
                            <p>Now, no more worries about getting the best ultrasound in Hapur. With Raj Nursing Home, get in touch with accuracy, commitment, and privacy. Reach out to Raj Nursing Home for all your ultrasound and diagnostic needs in Hapur!</p>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
};

export default function BlogDetail() {
    const { slug } = useParams();
    const currentPost = postData[slug as keyof typeof postData];

    if (!currentPost) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Post Not Found</h1>
                    <Link href="/blog" className="text-[#9d174d] font-bold hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen animate-page-enter mt-20">
            {/* Hero Section */}
            <div className="relative h-[250px] md:h-[300px] flex items-center overflow-hidden bg-gradient-to-r from-[#800020] via-[#9d174d] to-[#800020]">
                <div className="absolute inset-0 opacity-10">
                    <Image src="/raj/banner2.webp" alt="Blog" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 z-10 relative">
                    <div className="max-w-screen-2xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-4 line-clamp-1">
                            {currentPost.title}
                        </h1>
                        <nav className="flex items-center text-sm text-white/90 font-semibold">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span className="mx-2">/</span>
                            <Link href="/blog" className="hover:text-white transition-colors">Blog Detail</Link>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 py-12 md:py-20">
                <div className="grid lg:grid-cols-[1fr,350px] gap-12">
                    <article className="space-y-10">
                        <div className="relative h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                            <Image src={currentPost.image} alt={currentPost.title} fill className="object-cover" />
                        </div>
                        {currentPost.content}
                    </article>

                    <aside className="space-y-12">
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl sticky top-32">
                            <h3 className="text-xl font-black text-gray-900 mb-8 flex items-center gap-3">
                                <div className="w-2 h-8 bg-[#9d174d] rounded-full"></div>
                                LATEST POST
                            </h3>
                            <div className="space-y-6">
                                {blogPosts.map((post) => (
                                    <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-4 items-center">
                                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                            <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-bold text-gray-800 group-hover:text-[#9d174d] transition-colors line-clamp-2 leading-snug">
                                                {post.title}
                                            </h4>
                                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                Date: {post.date}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
}
