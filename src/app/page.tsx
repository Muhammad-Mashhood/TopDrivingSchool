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
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { DrivingTipsForm } from '@/components/driving-tips-form';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#ai-tips", label: "Tips" },
    { href: "#contact", label: "Contact" },
];

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-6">
      <Link href="#" className="mr-auto flex items-center space-x-2">
        <span className="font-bold sm:inline-block text-xl">Top Driving School</span>
      </Link>
      <nav className="hidden items-center justify-center gap-2 text-sm font-medium md:flex">
         {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="px-4 text-foreground/80 transition-colors hover:text-foreground">{link.label}</Link>
        ))}
      </nav>
      <div className="flex flex-1 items-center justify-end space-x-4 md:ml-auto md:flex-none">
        <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
          <a href="tel:07939662421">
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </a>
        </Button>
        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
          <Link href="#contact">Book Now</Link>
        </Button>
        <Link href="#" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
        </Link>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
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
  <section className="container grid lg:grid-cols-2 gap-12 items-center py-16 md:py-20 px-4 md:px-6">
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
    <section id="services" className="w-full py-16 md:py-20 bg-card">
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

const TestimonialsSection = () => (
    <section id="testimonials" className="w-full py-16 md:py-20">
        <div className="container max-w-screen-lg mx-auto px-4 md:px-6">
            <div className="w-full">
                <div className="space-y-4 mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Students Say</h2>
                    <p className="text-lg text-muted-foreground">We're proud to have helped so many people become confident drivers.</p>
                </div>
                <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-xl mx-auto">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1 h-full">
                                    <Card className="flex flex-col justify-between h-full p-6 bg-card shadow-md">
                                        <CardContent className="p-0 text-left">

                                            <div className="flex mb-4">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                                            </div>
                                            <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                                        </CardContent>
                                        <p className="font-bold text-right pt-4">- {testimonial.name}</p>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </div>
    </section>
);

const testimonials = [
  {
    name: 'Sarah L.',
    quote: 'My instructor was patient and encouraging. I passed my test on the first try! The AI tips for navigating the city centre were a game-changer.',
  },
  {
    name: 'Tom H.',
    quote: 'A fantastic experience from start to finish. The booking process was easy, and the lessons were tailored to my learning speed. Highly recommend!',
  },
  {
    name: 'Emily R.',
    quote: 'I was a very nervous driver, but TopDrivingSchool helped me build so much confidence. I now feel safe and competent on the road.',
  },
  {
    name: 'David P.',
    quote: 'The Pass Plus course was brilliant. I feel much more comfortable on motorways and driving at night. Well worth it.',
  },
];


const AiTipsSection = () => (
  <section id="ai-tips" className="py-16 md:py-20 bg-card">
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
  <section id="contact" className="py-16 md:py-20">
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
              <a href="tel:07939662421" className="flex items-center hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>07939 662421</span>
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
        <TestimonialsSection />
        <AiTipsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
