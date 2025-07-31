
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

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="currentColor"
        {...props}
    >
        <path
            d="M38.6 34.4q-1.4-2.1-2-2.3-1-.3-1.4.3t-.7 1q-.3.7-.5.9t-.5.3q-.6 0-1.7-.4t-3.2-1.9q-2.3-1.6-4.2-4.1t-2.6-4.3q-.4-1.2-.4-1.7 0-.7.3-1.2t.8-.9q.4-.4.5-.7t.1-1q0-.7-.2-1.2t-.5-1-.6-.8-1.1-.6q-.7-.2-1.1-.2a3.8 3.8 0 0 0-2.8 1.3 5.4 5.4 0 0 0-1.8 4.2q0 1.4.3 2.5t1 2.3 1.4 2.4 2 2.6 2.6 2.6 3.1 2.4 3.6 1.9 4 .9h.5q1.2 0 2.2-.6t1.5-1.8q.3-1 .2-1.9-.3-1.3-1-1.9zM24 4C13 4 4 13 4 24t9 20 20 9 20-9 9-20-9-20-20-9z"
        />
    </svg>
)

const Logo = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="h-12 w-12 text-primary fill-current"
    >
        <g transform="translate(0, -2)">
        <path d="M50,15 C 45,16 40,18 35,20 C 30,22 25,25 22,30 C 19,35 18,40 18,45 C 18,50 19,55 22,60 C 25,65 30,70 35,75 C 40,80 45,82 50,83 C 55,82 60,80 65,75 C 70,70 75,65 78,60 C 81,55 82,50 82,45 C 82,40 81,35 78,30 C 75,25 70,22 65,20 C 60,18 55,16 50,15 M50,12 C55,13 61,15 67,18 C73,21 78,25 82,30 C86,35 88,41 88,47 C 88,53 86,59 82,64 C 78,69 73,73 67,76 C 61,79 55,81 50,81 C 45,81 39,79 33,76 C 27,73 22,69 18,64 C 14,59 12,53 12,47 C 12,41 14,35 18,30 C 22,25 27,21 33,18 C 39,15 45,13 50,12 Z" fill="hsl(var(--primary))" />
        <path d="M48,15.5 C 49,14 51,14 52,15.5 L 54,18 L 51,20 L 49,18 Z M45,18 C 42,19 40,22 40,25 C 40,28 42,30 45,31 L 44,28 C 43,27 43,26 44,25 C 45,24 46,24 47,25 L 48,22 C 46,20 45,19 45,18 Z M55,18 C 58,19 60,22 60,25 C 60,28 58,30 55,31 L 56,28 C 57,27 57,26 56,25 C 55,24 54,24 53,25 L 52,22 C 54,20 55,19 55,18 Z M38,28 C 35,28 32,30 30,33 C 28,36 27,40 27,44 C 27,48 28,52 30,55 C 32,58 35,60 38,60 L 38,57 C 36,57 34,56 33,54 C 32,52 31,49 31,46 C 31,43 32,40 33,38 C 34,36 36,35 38,35 L 38,32 C 37,30 36,29 38,28 Z M62,28 C 65,28 68,30 70,33 C 72,36 73,40 73,44 C 73,48 72,52 70,55 C 68,58 65,60 62,60 L 62,57 C 64,57 66,56 67,54 C 68,52 69,49 69,46 C 69,43 68,40 67,38 C 66,36 64,35 62,35 L 62,32 C 63,30 64,29 62,28 Z M40,62 C 38,63 36,65 35,68 C 34,71 34,74 35,77 C 36,80 38,82 40,83 L 41,80 C 39,79 38,78 37,76 C 36,74 36,72 37,70 C 38,68 39,67 41,66 Z M60,62 C 62,63 64,65 65,68 C 66,71 66,74 65,77 C 64,80 62,82 60,83 L 59,80 C 61,79 62,78 63,76 C 64,74 64,72 63,70 C 62,68 61,67 59,66 Z M25,40 C 23,42 22,45 22,48 C 22,51 23,54 25,56 L 27,54 C 26,53 25,51 25,48 C 25,45 26,43 27,42 Z M75,40 C 77,42 78,45 78,48 C 78,51 77,54 75,56 L 73,54 C 74,53 75,51 75,48 C 75,45 74,43 73,42 Z" fill="hsl(var(--primary))"/>
        <text x="50" y="52" fontSize="24" fontFamily="serif" fill="hsl(var(--primary))" textAnchor="middle" dominantBaseline="middle">T</text>
        <path d="M52 50 C 58 50, 60 52, 60 46" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        <text x="50" y="92" fontSize="8" fontFamily="sans-serif" fill="hsl(var(--primary))" textAnchor="middle" dominantBaseline="middle" letterSpacing="1">TOP DRIVING</text>
        <text x="50" y="100" fontSize="5" fontFamily="sans-serif" fill="hsl(var(--primary))" textAnchor="middle" dominantBaseline="middle" letterSpacing="2">SCHOOL</text>
        </g>
    </svg>
)

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-6">
      <Link href="#" className="mr-auto flex items-center space-x-2">
        <Logo />
        <span className="font-bold sm:inline-block text-xl">Top Driving School</span>
      </Link>
      <nav className="hidden items-center justify-center gap-2 text-sm font-medium md:flex">
         {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="px-4 text-foreground/80 transition-colors hover:text-foreground">{link.label}</Link>
        ))}
      </nav>
      <div className="flex flex-1 items-center justify-end space-x-2 md:ml-auto md:flex-none">
        <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
          <a href="tel:+447939662421">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>
        </Button>
         <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
          <a href="https://wa.me/447939662421" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </Button>
        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link href="#contact">Book Now</Link>
        </Button>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
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
  <section className="container grid lg:grid-cols-2 gap-8 items-center py-8 px-4 md:px-6">
    <div className="space-y-6 text-center lg:text-left">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">
        Driving Courses
      </h1>
      <p className="text-lg text-muted-foreground">
        Nervous students are our speciality. Professional, patient, and friendly instruction to help you pass your test with confidence.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
          <Link href="#services">
            Our Services <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
          <Link href="#contact">Contact Us</Link>
        </Button>
      </div>
    </div>
    <div className="relative">
      <Image
        src="https://placehold.co/1200x800.png"
        alt="Driving instructor with a student"
        width={1200}
        height={800}
        className="rounded-xl shadow-2xl"
        data-ai-hint="driving lesson"
      />
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
    <section id="services" className="w-full py-8 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We offer a range of services to meet your driving needs.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <Card key={service.title} className="bg-background/50 text-center flex flex-col items-center p-6 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                        <div className="bg-secondary p-4 rounded-full mb-4">
                            <service.icon className="h-8 w-8 text-primary" />
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

const PricingSection = () => (
    <section id="pricing" className="w-full py-8">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Pricing</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Simple, transparent pricing. Get on the road with our special offer.
                </p>
            </div>
            <div className="flex justify-center">
                <Card className="max-w-sm w-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardHeader className="text-center bg-card p-6">
                        <CardTitle className="text-2xl">Hourly Lessons</CardTitle>
                        <CardDescription>Flexible and tailored to your pace (automatic car only).</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 text-center flex flex-col items-center justify-center">
                         <div className="flex items-baseline justify-center mb-4">
                            <span className="text-5xl font-bold">£30</span>
                            <span className="text-muted-foreground">/hour</span>
                        </div>
                        <p className="text-muted-foreground mb-6">Our special offer price.</p>
                        <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                           <Link href="#contact">Book Now</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
);

const testimonials = [
  {
    name: 'Sarah L.',
    quote: 'My instructor was patient and encouraging. I passed my test on the first try! The AI tips for navigating the city centre were a game-changer.',
    image: 'https://placehold.co/800x600.png',
  },
  {
    name: 'Tom H.',
    quote: 'A fantastic experience from start to finish. The booking process was easy, and the lessons were tailored to my learning speed. Highly recommend!',
    image: 'https://placehold.co/800x600.png',
  },
  {
    name: 'Emily R.',
    quote: 'I was a very nervous driver, but TopDrivingSchool helped me build so much confidence. I now feel safe and competent on the road.',
    image: 'https://placehold.co/800x600.png',
  },
  {
    name: 'David P.',
    quote: 'The Pass Plus course was brilliant. I feel much more comfortable on motorways and driving at night. Well worth it.',
    image: 'https://placehold.co/800x600.png',
  },
];

const TestimonialsSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section id="testimonials" className="w-full py-8 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Students Say</h2>
                    <p className="text-lg text-muted-foreground">We're proud to have helped so many people become confident drivers.</p>
                </div>
                <Carousel 
                    opts={{ align: "start", loop: true }} 
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1 h-full">
                                    <Card className="overflow-hidden shadow-lg bg-background">
                                        <div className="grid md:grid-cols-2 items-center">
                                            <div className="md:order-2 relative">
                                                <Image 
                                                    src={testimonial.image}
                                                    alt={`Testimonial from ${testimonial.name}`}
                                                    width={800}
                                                    height={600}
                                                    className="object-cover w-full h-full rounded-lg border-2 border-primary"
                                                    data-ai-hint="happy student"
                                                />
                                            </div>
                                            <div className="p-6 md:p-8 flex flex-col justify-center h-full">
                                                <div className="flex mb-4">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                                                </div>
                                                <blockquote className="text-muted-foreground italic text-lg">"{testimonial.quote}"</blockquote>
                                                <p className="font-bold text-right mt-4">- {testimonial.name}</p>
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
  <section id="ai-tips" className="py-8 bg-card">
    <div className="container px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center text-primary">
          <Sparkles className="h-8 w-8 mr-4 text-accent" />
          AI Driving Assistant
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Get real-time, AI-powered driving tips based on current traffic, weather, and road conditions in Altrincham.
        </p>
      </div>
      <DrivingTipsForm />
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-8">
    <div className="container px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
        <p className="text-lg text-muted-foreground">Have questions? Want to book a lesson? Reach out to us!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <Card className="shadow-lg bg-card flex flex-col">
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
              <div className="space-y-2 flex-grow flex flex-col">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your questions or comments..." className="flex-grow" suppressHydrationWarning />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <Card className="shadow-lg bg-card">
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <a href="#" className="flex items-center hover:text-primary transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>Based in Altrincham</span>
              </a>
              <a href="tel:+447939662421" className="flex items-center hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>+44 7939 662421</span>
              </a>
              <a href="https://wa.me/447939662421" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <WhatsAppIcon className="h-5 w-5 mr-3 text-primary" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:contact@topdrivingschool.co.uk" className="flex items-center hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>contact@topdrivingschool.co.uk</span>
              </a>
            </CardContent>
          </Card>
          <Image
            src="https://placehold.co/600x450.png"
            alt="Map of Altrincham"
            width={600}
            height={450}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            data-ai-hint="city map"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-card border-t">
    <div className="container py-6 text-center text-muted-foreground px-4 md:px-6">
      <p>&copy; {new Date().getFullYear()} Top Driving School. All rights reserved.</p>
    </div>
  </footer>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
