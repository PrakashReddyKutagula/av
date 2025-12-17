import dynamic from "next/dynamic";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";


const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => null,
});

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => null,
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => null,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => null,
});

const FloatingElements = dynamic(
  () => import("@/components/FloatingElements"),
  {
    loading: () => null,
  }
);

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => null,
});

const MouseParticles = dynamic(() => import("@/components/MouseParticles"), {
  loading: () => null,
});

const MouseSpotlight = dynamic(() => import("@/components/MouseSpotlight"), {
  loading: () => null,
});

const NoiseOverlay = dynamic(() => import("@/components/NoiseOverlay"), {
  loading: () => null,
});

const Process = dynamic(() => import("@/components/Process"), {
  loading: () => null,
});

const ReadyToStart = dynamic(() => import("@/components/ReadyToStart"), {
  loading: () => null,
});

const SkillsShowcase = dynamic(() => import("@/components/SkillsShowcase"), {
  loading: () => null,
});

export default function Home() {
  const rawTeam: Array<{
    name: string;
    role: string;
    bio: string;
    photo: string;
    linkedin?: string;
    instagram?: string;
    photoAlt?: string;
    photoPosition?: string;
  }> = [
    {
      name: "Sharan Gosh Reddy",
      role: "Lead Product Engineer",
      bio: "Founder driving vision, defining features, guiding team, and supporting development across all projects.",
      photo: "/sharan.jpg",
      photoAlt: "Sharan Gosh Reddy - Software Engineer",
      linkedin: "https://www.linkedin.com/in/sharan-gosh-reddy-03a084318/",
      instagram: "https://www.instagram.com/real_sharan_?igsh=NGM2bHd3N2ZqZWVm",
    },
    {
      name: "Puneeth Venkat Sai Lakkolla",
      role: "Social Media Designer",
      bio: "Designs engaging social media creatives to boost brand visibility and marketing impact.",
      photo: "/puneeth.jpg",
      photoAlt: "Puneeth Venkat Sai Lakkolla - Software Engineer",
      linkedin:
        "https://www.linkedin.com/in/puneeth-venkat-sai-lakkolla-535a42329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/puneeth_roy_45?igsh=N3ZpaHZ6cmt4cmYx",
    },
    {
      name: "Prakash Reddy Kutagula",
      role: "Frontend Developer",
      bio: "Builds responsive and user-friendly interfaces to deliver smooth and engaging user experiences.",
      photo: "/prakash.jpg",
      photoAlt: "Prakash Reddy Kutagula - Software Engineer",
      linkedin:
        "https://www.linkedin.com/in/prakash-reddy-kutagula-76a1b0317/",
      instagram: "https://www.instagram.com/prakashreddy__k?igsh=MWxjZDRkbHV2ZTVzOQ==",
    },
    {
      name: "Ramireddygari Ranjith Reddy",
      role: "QA Engineer & Social Media Designer",
      bio: "Ensures product quality through testing while creating engaging designs for social media marketing.",
      photo: "/ranjith.jpg",
      photoAlt: "Ramireddygari Ranjith Reddy - Engineer",
      linkedin:
        "https://www.linkedin.com/in/ramireddygari-ranjith-reddy-99063132a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "https://www.instagram.com/ranjith_reddy_91?igsh=MTN6eTI2cXQ0bWl3Yw==",
    },
    {
      name: "Keerthi Reddy",
      role: "UI/UX Designer & Backend Developer",
      bio: "Designs intuitive user experiences while supporting backend logic for smooth applications.",
      photo: "/keerthi.jpg",
      photoAlt: "Keerthi Reddy - Designer",
      linkedin: "http://www.linkedin.com/in/keerthi-reddy-65a105394",
      instagram: "https://www.instagram.com/_.keerthireddyc._?igsh=NWoyc2VuNXoybWkx",
    },
    {
      name: "Sonika Thondamanati",
      role: "UI/UX Designer",
      bio: "Creates clean, user-centered interface designs that enhance usability and product experience.",
      photo: "/sonika.jpeg",
      photoAlt: "Sonika Thondamanati - Engineer",
      linkedin: "http://www.linkedin.com/in/sonika-thondamanati-066a563a0",
      instagram: "https://www.instagram.com/soniiiii._.12?igsh=MTBxczYyOGIybDRmcw==",
    },
    {
      name: "Uday Kumar Bugidi",
      role: "Social Media Marketing Executive",
      bio: "Manages social media marketing strategies to grow reach, engagement, and brand awareness.",
      photo: "/uday.jpg",
      photoAlt: "Uday Kumar Bugidi - Engineer",
      photoPosition: "object-top",
      linkedin:
        "https://www.linkedin.com/in/uday-kumar-bugidi-320664326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/udaykumar__7?igsh=bXNwc2NzdjJjb3d5",
    },
    {
      name: "Abhinav M",
      role: "UI/UX Designer",
      bio: "Designs intuitive and visually appealing user interfaces focused on usability and consistency.",
      photo: "/abhinav.jpg",
      photoAlt: "Abhinav M - Engineer",
      photoPosition: "object-top",
      linkedin: "http://www.linkedin.com/in/abhinav-m-439419380",
      instagram: "https://www.instagram.com/abhinav_221b?igsh=eDBsNG00MTZudG5s",
    },
    {
      name: "Pavan Kumar Reddy Kovvuru",
      role: "Research & Resources Analyst",
      bio: "Researches tools, technologies, and resources to support development and decision-making.",
      photo: "/pavan.jpg",
      photoAlt: "Pavan Kumar Reddy Kovvuru - Engineer",
      linkedin:
        "https://www.linkedin.com/in/pavan-kumar-reddy-kovvuru-306a893a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/pavan.k_14?igsh=bmkxdHUyc3IyajM4",
    },
    {
      name: "Gorantla Chandu Harsha Vardhan Reddy",
      role: "IoT Hardware Support Engineer",
      bio: "Supports IoT projects by handling sensors, hardware components, and device integrations.",
      photo: "/harsha.jpg",
      photoAlt: "Gorantla Chandu Harsha Vardhan Reddy - Engineer",
      linkedin:
        "https://www.linkedin.com/in/gorantla-chandu-harsha-vardhan-reddy-b7a375293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/_harsha_gc_?igsh=MWs1YXI2MGVranVjcg==",
    },
  ];
  const team = rawTeam.filter(
    (m, i, arr) => arr.findIndex((t) => t.name === m.name) === i
  );
  return (
    <>
      <NoiseOverlay />
      <MouseParticles />
      <MouseSpotlight />
      <Navbar />

      <main className="text-foreground selection:bg-primary/30 relative">
        <FloatingElements />
        <Hero />
        <About />
        <Process />
        <section className="relative py-24 sm:py-32" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight gradient-animated-text">
                Projects
              </h2>
              <p className="text-gray-400 mt-4 text-base sm:text-lg">
                A selection of completed work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Uninest",
                  description:
                    "Student housing platform connecting residents with community.",
                  image: "/og-image.jpg",
                  url: "#",
                },
                {
                  title: "Crama",
                  description:
                    "a billing and Ai powered management system for Clothing Industries",
                  image: "/og-image.jpg",
                  url: "#",
                },
                {
                  title: "Elevate Sense",
                  description:
                    "is an IoT and AI-based intelligent elevator system that detects real passenger presence before responding to a call, avoiding unnecessary stops.",
                  image: "/og-image.jpg",
                  url: "#",
                },
                {
                  title: "Pradakshana app",
                  description:
                    "Mobile-friendly devotional app with guided flows.",
                  image: "/og-image.jpg",
                  url: "#",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-transform hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-black text-white">{project.title}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-2 py-1 rounded-full border border-white/10 text-primary hover:border-primary/40 hover:text-secondary transition-colors"
                    >
                      View
                    </a>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <button className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10 text-sm px-6 py-3">
                Working to add more
              </button>
            </div>
          </div>
        </section>
        <SkillsShowcase />
        <section className="relative py-24 sm:py-32" id="team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight gradient-animated-text">
                Our Team
              </h2>
              <p className="text-gray-400 mt-4 text-base sm:text-lg">
                The people behind Avasarams — building apps for seamless solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-transform hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10 mb-4">
                    <Image
                      src={member.photo}
                      alt={member.photoAlt ?? member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className={`object-cover ${member.photoPosition ?? "object-center"} w-full h-full`}
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <a
                      href={member.linkedin ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      referrerPolicy="no-referrer"
                      className="text-lg font-black text-white hover:text-primary transition-colors"
                    >
                      {member.name}
                    </a>
                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-gray-300">
                      {member.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <a
                      href={member.linkedin ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      referrerPolicy="no-referrer"
                      className="text-gray-400 hover:text-primary cursor-pointer transition-colors transform hover:scale-110"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.instagram ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary cursor-pointer transition-colors transform hover:scale-110"
                      aria-label={`${member.name} on Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ReadyToStart />
        
        <Contact />
        <Footer />
      </main>
    </>
  );
}
