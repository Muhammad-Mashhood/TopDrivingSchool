import Image from 'next/image';
import Link from 'next/link';
import {
  Car,
  GraduationCap,
  ShieldCheck,
  Star,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ChevronRight,
  Route,
  Menu,
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
    { href: "#courses", label: "Courses" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#ai-tips", label: "Tips" },
    { href: "#contact", label: "Contact" },
];

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 max-w-screen-2xl items-center">
      <Link href="#" className="mr-auto flex items-center space-x-2">
        <ShieldCheck className="h-8 w-8 text-primary" />
        <span className="font-bold sm:inline-block text-xl">TopDrivingSchool</span>
      </Link>
      <nav className="hidden items-center justify-center gap-6 text-sm font-medium md:flex">
         {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-foreground/60 transition-colors hover:text-foreground/80">{link.label}</Link>
        ))}
      </nav>
      <div className="flex flex-1 items-center justify-end space-x-2 md:ml-auto md:flex-none">
        <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
          <a href="tel:01611234567">
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
  <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
    <div className="space-y-6 text-center lg:text-left">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
        Learn to Drive with Confidence in Manchester
      </h1>
      <p className="text-lg text-muted-foreground">
        TopDrivingSchool offers comprehensive, AI-enhanced driving lessons to get you on the road safely and quickly.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
          <Link href="#courses">
            Our Courses <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
          <Link href="#contact">Request Info</Link>
        </Button>
      </div>
    </div>
    <div className="relative">
      <Image
        src="https://placehold.co/1200x800.png"
        alt="Happy driver holding car keys"
        width={1200}
        height={800}
        className="rounded-xl shadow-2xl"
        data-ai-hint="happy driver"
      />
    </div>
  </section>
);

const courses = [
  {
    icon: Car,
    title: 'Beginner Driving Course',
    description: 'Perfect for new drivers. Covers all the basics from steering to parking and prepares you for your test.',
    price: '£550',
  },
  {
    icon: GraduationCap,
    title: 'Pass Plus Course',
    description: 'For new drivers who have passed their test. Build confidence and potentially lower insurance premiums.',
    price: '£200',
  },
  {
    icon: Route,
    title: 'Refresher Lessons',
    description: 'Ideal for those who haven’t driven in a while and want to brush up on their skills and confidence.',
    price: '£35/hour',
  },
];

const CoursesSection = () => (
    <section id="courses" className="py-20 md:py-28 bg-card">
        <div className="container">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Our Driving Courses</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We offer a range of courses tailored to your needs, from complete beginners to experienced drivers.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <Card key={index} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="items-center">
                            <div className="bg-secondary p-4 rounded-full mb-4">
                                <course.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle>{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{course.description}</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <p className="text-2xl font-bold text-primary">{course.price}</p>
                             <Button className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                               <Link href="#contact">Book This Course</Link>
                             </Button>
                        </div>
                    </Card>
                ))}
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

const TestimonialsSection = () => (
    <section id="testimonials" className="py-20 md:py-28">
        <div className="container">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">What Our Students Say</h2>
                <p className="text-lg text-muted-foreground">We're proud to have helped so many people become confident drivers.</p>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2">
                            <div className="p-2 h-full">
                                <Card className="flex flex-col justify-between h-full p-6 shadow-md">
                                    <CardContent className="p-0">
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
    </section>
);

const AiTipsSection = () => (
  <section id="ai-tips" className="py-20 md:py-28 bg-card">
    <div className="container">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center">
          <Sparkles className="h-8 w-8 mr-4 text-accent" />
          AI Driving Assistant
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Get real-time, AI-powered driving tips based on current traffic, weather, and road conditions in Manchester.
        </p>
      </div>
      <DrivingTipsForm />
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="text-lg text-muted-foreground">Have questions? Want to book a lesson? Reach out to us!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Request Information</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" suppressHydrationWarning>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" suppressHydrationWarning />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" suppressHydrationWarning />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your questions or comments..." suppressHydrationWarning />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <a href="#" className="flex items-center hover:text-primary transition-colors">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>123 Driving Lane, Manchester, M1 1AB</span>
              </a>
              <a href="tel:01611234567" className="flex items-center hover:text-primary transition-colors">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>0161 123 4567</span>
              </a>
              <a href="mailto:contact@topdrivingschool.co.uk" className="flex items-center hover:text-primary transition-colors">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>contact@topdrivingschool.co.uk</span>
              </a>
            </CardContent>
          </Card>
          <Image
            src="https://placehold.co/600x450.png"
            alt="Map of driving school location"
            width={600}
            height={450}
            className="rounded-lg shadow-lg w-full"
            data-ai-hint="city map"
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-card border-t">
    <div className="container py-6 text-center text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} TopDrivingSchool. All rights reserved.</p>
    </div>
  </footer>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <CoursesSection />
        <TestimonialsSection />
        <AiTipsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
