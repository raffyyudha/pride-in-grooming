import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const galleryImages = [
    "https://ext.same-assets.com/2036182626/1773265293.webp",
    "https://ext.same-assets.com/2036182626/1115597440.webp",
    "https://ext.same-assets.com/2036182626/1536642376.webp",
    "https://ext.same-assets.com/2036182626/2463974948.webp",
    "https://ext.same-assets.com/2036182626/3783291367.webp",
    "https://ext.same-assets.com/2036182626/2506779301.jpeg",
    "https://ext.same-assets.com/2036182626/3349794240.jpeg",
    "https://ext.same-assets.com/2036182626/2598103307.jpeg",
    "https://ext.same-assets.com/2036182626/3458176884.jpeg",
    "https://ext.same-assets.com/2036182626/3001575601.jpeg",
    "https://ext.same-assets.com/2036182626/1398336169.jpeg",
    "https://ext.same-assets.com/2036182626/1164351541.jpeg",
  ];
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-4">
            <Image
              src="https://ext.same-assets.com/2036182626/1342995945.webp"
              alt="Pride In Grooming"
              width={280}
              height={120}
              className="h-auto"
            />
          </div>
          <nav className="flex justify-center items-center gap-8 text-sm tracking-wider">
            <Link href="#home" className="text-[#0074b8] hover:text-[#005a8f]">WELCOME</Link>
            <Link href="#about" className="text-gray-600 hover:text-[#0074b8]">ABOUT GREG</Link>
            <Link href="#gallery" className="text-gray-600 hover:text-[#0074b8]">GALLERY</Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#0074b8]">CONTACT US</Link>
            <div className="flex gap-4 ml-4">
              <Link href="#" className="text-gray-500 hover:text-[#0074b8]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#0074b8]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#0074b8]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      {/* Hero Image */}
      <section id="home" className="w-full">
        <div className="relative w-full h-[500px]">
          <Image
            src="https://ext.same-assets.com/2036182626/1781878774.jpeg"
            alt="Dog Hero"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </section>
      {/* Welcome Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="playfair text-4xl md:text-5xl text-[#0074b8] leading-tight">
              Greg Hudel<br />welcomes you<br />to Pride in<br />Grooming!
            </h1>
          </div>
          <div className="text-gray-600 leading-relaxed">
            <p className="mb-4">
              As owner and founder of <strong className="text-gray-800">Pride in Grooming</strong>, Greg is proud to provide thorough grooming services (including therapeutic brushing and scissor finish) for all sizes and breeds of dogs.
            </p>
            <p className="mb-4">
              An accredited and experienced professional, Greg understands that you and your dog need to feel comfortable. <strong className="text-gray-800">Pride in Grooming</strong> is based in a calm and clean home setting in compliance with Canadian Kennel Club Standards. Greg offers first rate services that you and your dog are sure to appreciate.
            </p>
            <p className="mb-6">Unleash your dog&apos;s wellness and beauty!</p>
            <Link
              href="#contact"
              className="inline-block border-2 border-gray-400 px-8 py-3 text-sm tracking-wider text-gray-600 hover:border-[#0074b8] hover:text-[#0074b8] transition-colors"
              CONTACT US
            </Link>
          </div>
        </div>
        {/* Collie Image */}
        <div className="flex justify-center mt-12">
          <Image
            src="https://ext.same-assets.com/2036182626/3590408167.webp"
            alt="Collie Dog"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </section>
      {/* Gray Divider */}
      <div className="h-40 bg-[#5a5a5a]"></div>
      {/* About Section */}
      <section id="about" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="https://ext.same-assets.com/2036182626/1818995604.jpeg"
              alt="Yorkshire Terrier"
              width={300}
              height={400}
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="playfair text-4xl md:text-5xl text-[#0074b8] italic mb-8 leading-tight">
              Pride in Grooming<br />was born out of a<br />love of dogs.
            </h2>
            <div className="text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-6">
              <p className="mb-4">
                <strong className="text-gray-800">Greg Hudel</strong> is a native of Kitchener-Waterloo and graduated from Resurrection High School and Conestoga College. As a welder fitter, he honed his superior hand-eye coordination and precision with hand held equipment.
              </p>
              <p className="mb-4">
                Embracing a lifelong love of dogs, Greg chose to transition to dog grooming as a profession. In 2006, after completing intensive study via the only Government Certified College program available, Greg opened <strong className="text-gray-800">Pride in Grooming.</strong>
              </p>
              <p className="mb-4">
                Greg recognizes that a healthy pet is a happy pet! His outstanding grooming abilities and commitment to customer satisfaction are well established.
              </p>
              <p>
                <strong className="text-gray-800">Pride in Grooming</strong> welcomes you to discover professional dog grooming services with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Header */}
      <section id="gallery" className="bg-[#5a5a5a] py-12">
        <h2 className="text-center text-white text-2xl tracking-widest font-semibold">
          SOME OF OUR HAPPY CUSTOMERS....
        </h2>
      </section>
      {/* Gallery Grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="aspect-square relative overflow-hidden">
              <Image
                src={img}
                alt={`Happy customer ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <Image
              src="https://ext.same-assets.com/2036182626/3469757817.webp"
              alt="Shar Pei Puppy"
              width={350}
              height={400}
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="playfair text-3xl md:text-4xl text-[#0074b8] mb-2">Pride in Grooming, Inc.</h2>
            <p className="playfair text-xl text-[#0074b8] italic mb-1">49 Waldau Crescent</p>
            <p className="playfair text-xl text-[#0074b8] italic mb-6">Kitchener, Ontario, Canada</p>
            <p className="text-xl text-[#0074b8] mb-2">
              <strong>T:</strong> 519 745 0326
            </p>
            <p className="text-xl text-[#0074b8] mb-8">
              <strong>E:</strong> info@prideingrooming.com
            </p>
            {/* Map placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.68668053965!2d-80.60984!3d43.416427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf48c03ee5105%3A0x9525f8e6df5f544b!2sKitchener%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Back to Top */}
      <div className="flex justify-center py-8">
        <Link href="#home" className="text-gray-500 flex flex-col items-center hover:text-[#0074b8]">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <span className="text-sm tracking-wider">TOP</span>
        </Link>
      </div>
      {/* Footer */}
      <footer className="bg-[#0074b8] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-right md:text-left text-sm leading-relaxed">
            <p>Accredited and Experienced Dog</p>
            <p>Groomer complying with Canadian</p>
            <p>Kennel Club Breed Standards</p>
            <p className="mt-4">All Sizes and Breeds</p>
            <p className="mt-4">Show Dogs Welcome</p>
            <p className="mt-4">Sterilized equipment and tools</p>
            <p>Clean facility</p>
          </div>
          <div>
            <h3 className="font-semibold italic mb-4">Our services include:</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Therapeutic Brushing</li>
              <li>Bath/ Massage/ Blow-dry</li>
              <li>Scissor Finish</li>
              <li>Ear Cleaning</li>
              <li>Nail Clipping</li>
            </ul>
          </div>
          <div>
            <h3 className="playfair text-2xl italic mb-4">Talk to Greg today.</h3>
            <p className="font-bold text-sm tracking-wider mb-2">PRIDE IN GROOMING, INC.</p>
            <p className="text-sm">49 WALDAU CRESCENT</p>
            <p className="text-sm mb-4">KITCHENER, ONTARIO, CANADA</p>
            <p className="text-lg">
              <strong>T:</strong> 519 745 0326
            </p>
            <p className="text-lg">
              <strong>E:</strong>{" "}
              <a href="mailto:info@prideingrooming.com" className="underline">
                info@prideingrooming.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}