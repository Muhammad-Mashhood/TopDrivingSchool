
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
    <Image 
        src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753976947/Top_Driving_School_transparent_Logo_1_ys7cep.png"
        alt="Top Driving School Logo"
        width={56}
        height={56}
        className="h-14 w-14"
    />
)

const Header = () => (
  <header className="z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
      <div className="flex flex-1 items-center justify-end space-x-4 md:ml-auto md:flex-none">
        <a href="https://wa.me/447939662421" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex">
            <Image src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753977352/Whatsapp-Logo-PNG-Images-HD_xyrklr.png" alt="WhatsApp" width={24} height={24} />
        </a>
        <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
          <a href="tel:+447939662421">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
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
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/1">
                                <div className="p-1 h-full">
                                    <Card className="overflow-hidden shadow-lg bg-background">
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
  <section id="ai-tips" className="py-8 bg-background">
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
  <section id="contact" className="py-8 bg-card">
    <div className="container px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
        <p className="text-lg text-muted-foreground">Have questions? Want to book a lesson? Reach out to us!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        <Card className="shadow-lg bg-background flex flex-col">
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
          <Card className="shadow-lg bg-background">
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
