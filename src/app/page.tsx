import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image src="https://ext.same-assets.com/3248117517/3027979247.png" alt="Camp Scotty" width={180} height={60} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-white text-sm tracking-wide">
          <Link href="#" className="hover:opacity-80">About</Link>
          <Link href="#" className="hover:opacity-80">Services</Link>
          <Link href="#" className="hover:opacity-80">News + Resources</Link>
          <Link href="#" className="hover:opacity-80">Testimonials</Link>
          <Link href="#" className="hover:opacity-80">Contact us</Link>
          <Link href="#" className="hover:opacity-80">Online Registration</Link>
          <Link href="#" className="hover:opacity-80">Webcams</Link>
          <div className="flex gap-2">
            <Link href="#" className="w-9 h-9 bg-gray-500/50 rounded flex items-center justify-center hover:bg-gray-500/70">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 bg-gray-500/50 rounded flex items-center justify-center hover:bg-gray-500/70">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="white" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/></svg>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section min-h-[500px] flex flex-col justify-center px-8 md:px-16 py-32">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 italic" style={{fontFamily: 'Arvo, serif'}}>Welcome to Camp Scotty</h1>
        <p className="text-white text-xl mb-8">Dog Boarding, Grooming & Training Services</p>
        <div className="flex gap-4 flex-wrap">
          <Link href="#" className="bg-white text-gray-700 px-8 py-3 text-sm tracking-widest hover:bg-gray-100">LEARN MORE</Link>
          <Link href="#" className="bg-[#6fa8dc] text-white px-8 py-3 text-sm tracking-widest hover:bg-[#5a93c7]">BOOK NOW</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {/* About Card */}
          <div className="relative h-[500px] overflow-hidden">
            <Image src="https://ext.same-assets.com/3248117517/3067238180.jpeg" alt="Dog" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h3 className="text-white text-3xl font-bold">Learn More</h3>
              <p className="text-white text-sm tracking-widest mt-2">ABOUT CAMP SCOTTY</p>
              <Link href="#" className="mt-4 bg-white text-gray-700 px-6 py-3 text-sm tracking-widest text-center hover:bg-gray-100">ABOUT US</Link>
            </div>
          </div>

          {/* Boarding */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image src="https://ext.same-assets.com/3248117517/4176671973.png" alt="Boarding" width={128} height={128} className="object-cover" />
            </div>
            <h4 className="text-xl font-semibold mb-3" style={{fontFamily: 'Arvo, serif'}}>Boarding and Daycare</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">Over 40 Spacious Suites in our modern dog boarding/grooming facility located in Pelham AL. Our well-trained staff walks the dogs 6-7 times daily!</p>
            <Link href="#" className="block bg-[#b8a6a0] text-white py-4 text-sm tracking-widest hover:bg-[#a89590]">MORE INFO</Link>
          </div>

          {/* Grooming */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image src="https://ext.same-assets.com/3248117517/557806193.png" alt="Grooming" width={128} height={128} className="object-cover" />
            </div>
            <h4 className="text-xl font-semibold mb-3" style={{fontFamily: 'Arvo, serif'}}>Dog Care and Grooming</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">We have an experienced staff that is well trained for grooming all different sizes and types of dogs.</p>
            <Link href="#" className="block bg-[#8d939d] text-white py-4 text-sm tracking-widest hover:bg-[#7d838d]">MORE INFO</Link>
          </div>

          {/* Training */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <Image src="https://ext.same-assets.com/3248117517/1358037440.jpeg" alt="Training" width={128} height={128} className="object-cover" />
            </div>
            <h4 className="text-xl font-semibold mb-3" style={{fontFamily: 'Arvo, serif'}}>Dog Behavior Training</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">We offer the education and skills for dogs and owners to enhance their relationship.</p>
            <Link href="#" className="block bg-[#cfbca3] text-white py-4 text-sm tracking-widest hover:bg-[#bfac93]">MORE INFO</Link>
          </div>
        </div>
      </section>

      {/* Why Camp Scotty */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#6fa8dc] rounded-full flex items-center justify-center">
              <Image src="https://ext.same-assets.com/3248117517/956314921.png" alt="Bone" width={40} height={40} />
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{fontFamily: 'Arvo, serif'}}>Why Camp Scotty</h2>
            <p className="text-xl mb-6">for Dog Boarding & Grooming Services?</p>
            <p className="text-gray-600 italic mb-8">When you go on vacation we want your pet to go on vacation too! Or Maybe a fun day out at our dog day care? Thats why we built Camp Scotty.</p>
            <Link href="#" className="inline-block bg-[#6fa8dc] text-white px-8 py-4 text-sm tracking-widest hover:bg-[#5a93c7]">CONTACT CAMP SCOTTY</Link>
          </div>
          <div className="relative h-[400px]">
            <Image src="https://ext.same-assets.com/3248117517/3018965440.jpeg" alt="Dog" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* What Your Dog Can Expect */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl text-center tracking-widest mb-12">WHAT YOUR DOG CAN EXPECT</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-[#6fa8dc] pl-6">
              <p className="text-gray-600 mb-4">First and foremost, the experience at Camp Scotty is unlike the traditional boarding or grooming services at a Veterinarian Facility. We take pride in the care and treatment of our patients because, like you, we love dogs and treat them like family while they are here.</p>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>• Clean, Modern Dog Boarding Facility designed for a comfortable, fun experience</li>
                <li>• Caring staff carefully selected by our management</li>
                <li>• All inclusive pricing with no surprises</li>
                <li>• Open 365 days a year 7am to 7pm!</li>
                <li>• Full Dog Care Service facility for the entire Birmingham AL area</li>
              </ul>
            </div>
            <div className="bg-white shadow-lg">
              <div className="flex">
                <button className="flex-1 py-4 text-sm tracking-widest border-b-2 border-transparent hover:border-[#6fa8dc]">SAFETY</button>
                <button className="flex-1 py-4 text-sm tracking-widest bg-[#6fa8dc] text-white">HAPPINESS</button>
                <button className="flex-1 py-4 text-sm tracking-widest bg-[#4a5568] text-white">GROOMING & EDUCATION</button>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm">Camp Scotty is a secure dog boarding facility with visible access and monitored online with security cameras. You can even see your dog with our wifi cameras online while you are away!</p>
                <Link href="#" className="text-[#6fa8dc] text-sm mt-4 inline-block">Ask us for more details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-16 px-4 text-white text-center">
        <h2 className="text-4xl font-bold italic mb-4" style={{fontFamily: 'Arvo, serif'}}>What People Say</h2>
        <p className="text-lg mb-12">Voted OUTSTANDING Dog Boarding Facility & Dog Grooming by Our Clients</p>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { name: "T Tackett", text: "Always sooo good to my GS", img: "https://ext.same-assets.com/3248117517/1036325248.png" },
            { name: "Laura Stone", text: "Our dog Beau attends daycare here and he spends the night in boarding when we go out of town. Not only does he have a fabulous time during every visit...", img: "https://ext.same-assets.com/3248117517/57913609.jpeg" },
            { name: "Chas Falkenhagen", text: "They are so nice and helpful. My dog is always happy", img: "https://ext.same-assets.com/3248117517/450308054.png" },
          ].map((t, i) => (
            <div key={i} className="text-center">
              <Image src={t.img} alt={t.name} width={50} height={50} className="rounded-full mx-auto mb-3" />
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}
              </div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm mt-2 opacity-90">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hours & Contact */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6">OUR HOURS</h3>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
              <div key={day} className="flex justify-between py-2 border-b text-gray-600">
                <span>{day}</span>
                <span>7:00 am - 7:00 pm</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl mb-6">CONTACT US</h3>
            <p className="text-gray-600 mb-2">2785 Pelham Pkwy, Pelham, AL 35124, USA</p>
            <p className="text-gray-600 mb-6">205.685.8882</p>
            <Link href="#" className="inline-block border border-gray-400 px-8 py-3 text-sm tracking-widest hover:bg-gray-100">CONTACT</Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section py-8">
        <p className="text-center text-white text-sm tracking-widest mb-6">CHECK OUT OUR PETS GALLERY</p>
        <div className="flex overflow-hidden">
          {[
            "https://ext.same-assets.com/3248117517/416895548.jpeg",
            "https://ext.same-assets.com/3248117517/3592457180.jpeg",
            "https://ext.same-assets.com/3248117517/2857116691.jpeg",
            "https://ext.same-assets.com/3248117517/2948313419.jpeg",
            "https://ext.same-assets.com/3248117517/3440627463.jpeg",
            "https://ext.same-assets.com/3248117517/1500273819.jpeg",
          ].map((img, i) => (
            <div key={i} className="w-1/6 aspect-square relative flex-shrink-0">
              <Image src={img} alt="Pet" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3a4049] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <Image src="https://ext.same-assets.com/3248117517/3027979247.png" alt="Camp Scotty" width={180} height={60} />
            <p className="mt-4 font-semibold">CAMP SCOTTY</p>
            <p className="text-sm italic text-gray-400">Your pet&apos;s home away from home.</p>
            <div className="flex gap-2 mt-4">
              <Link href="#" className="w-9 h-9 bg-gray-600 flex items-center justify-center hover:bg-gray-500">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="#" className="w-9 h-9 bg-gray-600 flex items-center justify-center hover:bg-gray-500">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/></svg>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-4">Connect with Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white">Homepage</Link></li>
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Webcams</Link></li>
              <li><Link href="#" className="hover:text-white">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-4">Our Location</h4>
            <p className="text-gray-400 text-sm">2785 Pelham Pkwy, Pelham, AL 35124, US</p>
            <p className="text-gray-400 text-sm">campscottypelham@gmail.com</p>
            <p className="text-gray-400 text-sm">Call or Text (205) 685-8882</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-600 text-center text-sm text-gray-400">
          Copyright 2016 Camp Scotty. Site by Zeekee.
        </div>
      </footer>
    </main>
  );
}
