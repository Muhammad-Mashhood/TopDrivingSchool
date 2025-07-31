
'use client'

import Image from 'next/image';
import Link from 'next/link';
import {
  Car,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ChevronRight,
  Menu,
  CheckCircle,
  CreditCard,
} from 'lucide-react';
import React from 'react';
import Autoplay from "embla-carousel-autoplay"


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { DrivingTipsForm } from '@/components/driving-tips-form';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#ai-tips", label: "Tips" },
    { href: "#contact", label: "Contact" },
];

const Logo = () => (
    <Image 
        src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753976947/Top_Driving_School_transparent_Logo_1_ys7cep.png"
        alt="Top Driving School Logo"
        width={56}
        height={56}
        className="h-14 w-14"
    />
)

const Header = () => (
  <header className="absolute top-0 z-50 w-full">
    <div className="container flex h-20 items-center px-4 md:px-6">
      <Link href="#" className="mr-auto flex items-center space-x-2">
        <Logo />
        <span className="font-bold sm:inline-block text-xl">Top Driving School</span>
      </Link>
      <nav className="hidden items-center justify-center gap-2 text-sm font-medium md:flex absolute left-1/2 -translate-x-1/2">
         <div className="navbar-glass flex items-center gap-2 p-1">
            {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="px-4 py-1.5 text-foreground/80 transition-colors hover:text-foreground rounded-full hover:bg-white/10">{link.label}</Link>
            ))}
         </div>
      </nav>
      <div className="flex flex-1 items-center justify-end space-x-4 md:ml-auto md:flex-none">
        <a href="https://wa.me/447939662421" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex button-3d h-9 w-9 p-0 items-center justify-center rounded-full">
            <Image src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753977352/Whatsapp-Logo-PNG-Images-HD_xyrklr.png" alt="WhatsApp" width={32} height={32} />
        </a>
        <Button size="sm" asChild className="hidden sm:inline-flex rounded-full button-3d">
          <a href="tel:+447939662421">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full button-3d" asChild>
          <Link href="#contact">Book Now</Link>
        </Button>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden button-3d">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-y-4 pt-6">
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground">{link.label}</Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center px-4 md:px-6">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
          Driving School in Manchester
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
          Nervous students are our speciality. Professional, patient, and friendly instruction to help you pass your test with confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto rounded-full button-3d">
            <Link href="#services">
              Our Services <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" className="w-full sm:w-auto rounded-full button-3d">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
       <div className="relative flex items-center justify-center">
        <Image 
          src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753991686/craiyon_005443_image_w7bg5n.png"
          alt="Modern car for driving lessons"
          width={600}
          height={400}
          className="object-contain drop-shadow-lg"
          data-ai-hint="modern car"
        />
      </div>
    </div>
  </section>
);


const services = [
    {
        title: "Advanced Training",
        description: "Enhance your driving skills with our advanced training modules.",
        icon: CheckCircle
    },
    {
        title: "Beginner Training",
        description: "Perfect for new learners, we cover all the basics to get you on the road.",
        icon: CheckCircle
    },
    {
        title: "License Preparation",
        description: "We'll get you ready for your test with mock exams and focused practice.",
        icon: CheckCircle
    },
    {
        title: "Professional & Friendly",
        description: "Our instructors are patient, friendly, and dedicated to your success.",
        icon: CheckCircle
    }
];

const ServicesSection = () => (
    <section id="services" className="relative w-full py-16 flex flex-col justify-center overflow-hidden">
        <div className="container relative mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We offer a range of services to meet your driving needs.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <Card key={service.title} className="bg-transparent text-center flex flex-col items-center p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0">
                        <div className="bg-secondary p-4 rounded-full mb-4">
                            <service.icon className="h-8 w-8 text-accent" />
                        </div>
                        <CardHeader className="p-0 mb-2">
                            <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);

const pricingTiers = [
    {
        title: "1 Hour Lesson",
        price: "£35",
        description: "Flexible and tailored to your pace (automatic car only).",
    },
    {
        title: "2 Hours Block",
        price: "£65",
        description: "Save on a longer, more intensive driving session.",
    },
    {
        title: "10 Hours Package",
        price: "£320",
        description: "Best value for a comprehensive learning experience.",
    },
]

const PricingSection = () => (
    <section id="pricing" className="relative w-full py-16 flex flex-col justify-center">
        <div className="container relative mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Pricing</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Simple, transparent pricing. Get on the road with our special offers.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {pricingTiers.map((tier) => (
                    <div key={tier.title} className="card-3d">
                        <div className="text-center flex flex-col items-center h-full">
                            <CreditCard className="w-16 h-16 text-neutral-500 mb-4" />
                            <h3 className="text-2xl font-bold text-neutral-100">{tier.title}</h3>
                            <div className="my-6">
                                <span className="text-5xl font-bold text-neutral-50">{tier.price}</span>
                            </div>
                            <p className="text-neutral-300 mb-6 flex-grow">{tier.description}</p>
                             <Link href="#contact" className="button-3d mt-auto w-full text-base font-semibold text-center no-underline text-white rounded-xl p-3">
                                Book Now
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const testimonials = [
  {
    quote: 'Absolutely brilliant! I passed first time with zero faults. Couldn\'t have asked for a better instructor!',
    image: 'https://res.cloudinary.com/duyxw8aet/image/upload/v1753977633/IMG-20250706-WA0047_ftyk6s.jpg',
  },
  {
    quote: 'Fantastic instructor, very patient and explains everything clearly. Highly recommended.',
    image: 'https://res.cloudinary.com/duyxw8aet/image/upload/v1753977634/IMG-20250706-WA0049_kykoxf.jpg',
  },
  {
    quote: 'I was a nervous wreck before I started, but my instructor was so calm and reassuring. So happy I chose Top Driving School!',
    image: 'https://res.cloudinary.com/duyxw8aet/image/upload/v1753977634/IMG-20250706-WA0051_f1qffg.jpg',
  },
  {
    quote: 'Great lessons, great price, great instructor. Passed my test with flying colours. Thanks!',
    image: 'https://res.cloudinary.com/duyxw8aet/image/upload/v1753977633/IMG-20250706-WA0046_crr9br.jpg',
  },
  {
    quote: 'The best driving school in Manchester! My instructor made learning to drive a fun and enjoyable experience.',
    image: 'https://res.cloudinary.com/duyxw8aet/image/upload/v1753977633/IMG-20250706-WA0044_mguz6c.jpg',
  },
  {
    quote: 'I had lessons with other schools before and Top Driving School is by far the best. Thank you for helping me pass!',
    image: 'https://res.cloudinary.com/duyxw8aet/image/upload/v1753977633/IMG-20250706-WA0045_q9ybhb.jpg',
  },
];

const TestimonialsSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section id="testimonials" className="relative w-full py-8 bg-transparent">
            <div className="container relative mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Students Say</h2>
                    <p className="text-lg text-muted-foreground">We're proud to have helped so many people become confident drivers.</p>
                </div>
                <Carousel 
                    opts={{ align: "start", loop: true }} 
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/1">
                                <div className="p-1 h-full">
                                    <Card className="overflow-hidden shadow-lg bg-background/70 backdrop-blur-sm border-0">
                                        <div className="grid md:grid-cols-2 items-center">
                                            <div className="relative md:order-2 w-full h-[400px]">
                                                <Image 
                                                    src={testimonial.image}
                                                    alt={`Testimonial from a happy student`}
                                                    width={650}
                                                    height={400}
                                                    className="object-cover w-full h-full"
                                                    data-ai-hint="happy student"
                                                />
                                            </div>
                                            <div className="p-6 md:p-8 flex flex-col justify-center md:order-1">
                                                <div className="flex mb-4">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                                                </div>
                                                <blockquote className="text-muted-foreground italic text-lg mb-4">"{testimonial.quote}"</blockquote>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
};

const AiTipsSection = () => (
  <section id="ai-tips" className="relative py-8 overflow-hidden">
    <div className="container relative px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center text-primary">
          <Sparkles className="h-8 w-8 mr-4 text-accent" />
          AI Driving Assistant
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Get real-time, AI-powered driving tips based on current traffic, weather, and road conditions in Altrincham, Manchester.
        </p>
      </div>
      <DrivingTipsForm />
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="relative py-8 overflow-hidden">
    <div className="container relative px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
        <p className="text-lg text-muted-foreground">Have questions? Want to book a lesson? Reach out to us!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <Card className="shadow-lg bg-background/70 backdrop-blur-sm flex flex-col border-0">
          <CardHeader>
            <CardTitle>Request Information</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <form className="space-y-4 flex flex-col flex-grow">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" suppressHydrationWarning />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" suppressHydrationWarning />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Your Phone Number" suppressHydrationWarning />
              </div>
              <div className="space-y-2 flex-grow flex flex-col">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your questions or comments..." className="flex-grow" suppressHydrationWarning />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 button-3d">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <Card className="shadow-lg bg-background/70 backdrop-blur-sm border-0">
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <a href="#" className="flex items-center hover:text-primary transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-red-500" />
                <span>Based in Altrincham, Manchester</span>
              </a>
              <a href="mailto:aminmakki@hotmail.com" className="flex items-center hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <span>aminmakki@hotmail.com</span>
              </a>
              <a href="tel:+447939662421" className="flex items-center hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mr-3 text-green-500" />
                <span>+44 7939 662421</span>
              </a>
              <a href="https://wa.me/447939662421" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                 <Image src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753977352/Whatsapp-Logo-PNG-Images-HD_xyrklr.png" alt="WhatsApp" width={20} height={20} className="mr-3" />
                <span>WhatsApp</span>
              </a>
            </CardContent>
          </Card>
           <div className="rounded-lg shadow-lg w-full h-[300px] overflow-hidden">
             <a href="https://maps.app.goo.gl/LsUZyQtug5WZ4C2AA?g_st=iw" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image
                    src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753983292/b59c28a8-6559-4726-adc3-8e50d87ed3d8.png"
                    alt="Map to Top Driving School"
                    width={600}
                    height={300}
                    className="object-cover w-full h-full"
                    data-ai-hint="map location"
                />
             </a>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container relative py-6 text-center text-muted-foreground px-4 md:px-6">
      <p>&copy; {new Date().getFullYear()} Top Driving School. All rights reserved.</p>
    </div>
  </footer>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,_rgba(28,31,109,0.5)_0%,_rgba(49,10,82,0.3)_40%,_transparent_85%),_radial-gradient(ellipse_at_top_right,_rgba(230,240,255,0.15)_0%,_rgba(41,98,255,0.2)_30%,_transparent_70%),_linear-gradient(to_bottom,transparent_40%,_rgba(20,40,90,0.5)_100%)]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <AiTipsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

    