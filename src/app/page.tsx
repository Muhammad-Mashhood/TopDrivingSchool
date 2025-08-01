'use client'

import React, { useState, useEffect } from 'react';
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


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    <div className="container flex h-16 md:h-20 items-center px-4 md:px-6">
      <Link href="#" className="flex items-center space-x-2">
        <Logo />
        <span className="font-bold text-lg md:text-xl">Top Driving School</span>
      </Link>
      <nav className="hidden items-center justify-center gap-1 text-sm font-medium xl:flex absolute left-1/2 -translate-x-1/2">
         <div className="navbar-glass flex items-center gap-1 p-1">
            {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="px-3 py-1.5 text-foreground/70 transition-colors hover:text-white rounded-md">{link.label}</Link>
            ))}
         </div>
      </nav>
      <div className="flex items-center justify-end ml-auto">
        {/* Desktop buttons - hidden on mobile and tablet, only show on xl screens */}
        <div className="hidden xl:flex items-center space-x-3 mr-4">
          <a href="https://wa.me/447939662421" target="_blank" rel="noopener noreferrer" className="h-9 w-9 p-0 flex items-center justify-center rounded-full">
              <Image src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753977352/Whatsapp-Logo-PNG-Images-HD_xyrklr.png" alt="WhatsApp" width={32} height={32} />
          </a>
          <Button asChild className="rounded-full button-3d text-sm text-white">
            <a href="tel:+447939662421" className="text-white">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full button-3d text-sm" asChild>
            <Link href="#contact">Book Now</Link>
          </Button>
        </div>
        {/* Mobile menu - show hamburger on anything smaller than xl */}
        <Sheet>
            <SheetTrigger asChild>
                <Button className="xl:hidden button-3d mr-4">
                    <Menu className="h-6 w-6 text-white" />
                    <span className="sr-only">Open navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-y-4 pt-6">
                    {navLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground">{link.label}</Link>
                    ))}
                    <div className="flex flex-col gap-y-4 pt-4 border-t border-border">
                         <Button asChild className="w-full justify-center button-3d text-white">
                          <a href="tel:+447939662421" className="text-white">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </a>
                        </Button>
                        <Button asChild className="w-full justify-center button-3d bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="#contact">
                            Book Now
                          </Link>
                        </Button>
                         <a href="https://wa.me/447939662421" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg font-medium text-foreground/80 transition-colors hover:text-foreground">
                            <Image src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753977352/Whatsapp-Logo-PNG-Images-HD_xyrklr.png" alt="WhatsApp" width={24} height={24} className="mr-2" />
                            WhatsApp
                        </a>
                    </div>
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
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-primary">
          Driving School in Manchester
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
          Nervous students are our speciality. Professional, patient, and friendly instruction to help you pass your test with confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto rounded-full button-3d px-8 py-3">
            <Link href="#services">
              Our Services <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild className="w-full sm:w-auto rounded-full button-3d px-8 py-3">
            <Link href="#contact" className="text-white">Contact Us</Link>
          </Button>
        </div>
      </div>
       <div className="relative flex items-center justify-center mt-8 md:mt-0">
        <Image 
          src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753991686/craiyon_005443_image_w7bg5n.png"
          alt="Modern car for driving lessons"
          width={600}
          height={400}
          className="object-contain drop-shadow-lg w-full max-w-md md:max-w-full"
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
    <section id="services" className="relative w-full py-12 md:py-16 flex flex-col justify-center overflow-hidden">
        <div className="container relative mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">Our Services</h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    We offer a range of services to meet your driving needs.
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {services.map((service) => (
                    <Card key={service.title} className="bg-transparent text-center flex flex-col items-center p-3 md:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-0">
                        <div className="bg-secondary p-3 md:p-4 rounded-full mb-3 md:mb-4">
                            <service.icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                        </div>
                        <CardHeader className="p-0 mb-2">
                            <CardTitle className="text-sm md:text-base lg:text-lg">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-xs md:text-sm text-muted-foreground">{service.description}</p>
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
        value: "1-hour-lesson-35"
    },
    {
        title: "2 Hours Block",
        price: "£65",
        description: "Save on a longer, more intensive driving session.",
        value: "2-hours-block-65"
    },
    {
        title: "10 Hours Package",
        price: "£320",
        description: "Best value for a comprehensive learning experience.",
        value: "10-hours-package-320"
    },
]

const planOptions = [
    { value: "1-hour-lesson-35", label: "1 Hour Lesson - £35" },
    { value: "2-hours-block-65", label: "2 Hours Block - £65" },
    { value: "10-hours-package-320", label: "10 Hours Package - £320" },
    { value: "custom", label: "Custom / Other" },
]

const PricingSection = ({ onPlanSelect }: { onPlanSelect: (planValue: string) => void }) => (
    <section id="pricing" className="relative w-full py-12 md:py-16 flex flex-col justify-center">
        <div className="container relative mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">Our Pricing</h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    Simple, transparent pricing. Get on the road with our special offers.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                {pricingTiers.map((tier) => (
                    <div key={tier.title} className="card-3d">
                        <div className="text-center flex flex-col items-center h-full">
                            <CreditCard className="w-12 h-12 md:w-16 md:h-16 text-neutral-500 mb-4" />
                            <h3 className="text-xl md:text-2xl font-bold text-neutral-100">{tier.title}</h3>
                            <div className="my-4 md:my-6">
                                <span className="text-3xl md:text-5xl font-bold text-neutral-50">{tier.price}</span>
                            </div>
                            <p className="text-neutral-300 mb-4 md:mb-6 flex-grow text-sm md:text-base">{tier.description}</p>
                            <button 
                              onClick={() => onPlanSelect(tier.value)}
                              className="button-3d mt-auto w-full text-sm md:text-base font-semibold text-center no-underline text-white rounded-xl p-3 cursor-pointer border-0 bg-transparent"
                            >
                                Book Now
                            </button>
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
    const [api, setApi] = useState<any>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        const interval = setInterval(() => {
            api.scrollNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [api]);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section id="testimonials" className="relative w-full py-8 md:py-12 bg-transparent">
            <div className="container relative mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">What Our Students Say</h2>
                    <p className="text-base md:text-lg text-muted-foreground">We're proud to have helped so many people become confident drivers.</p>
                </div>
                <Carousel 
                    setApi={setApi}
                    opts={{ 
                        align: "start", 
                        loop: true
                    }} 
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/1">
                                <div className="p-1 h-full">
                                    <Card className="overflow-hidden shadow-lg bg-background/70 backdrop-blur-sm border-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                                            <div className="relative md:order-2 w-full h-[250px] md:h-[400px]">
                                                <Image 
                                                    src={testimonial.image}
                                                    alt={`Testimonial from a happy student`}
                                                    width={650}
                                                    height={400}
                                                    className="object-cover object-center w-full h-full"
                                                    data-ai-hint="happy student"
                                                />
                                            </div>
                                            <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-center md:order-1">
                                                <div className="flex mb-3 md:mb-4">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-accent fill-accent" />)}
                                                </div>
                                                <blockquote className="text-muted-foreground italic text-base md:text-lg mb-4">"{testimonial.quote}"</blockquote>
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
  <section id="ai-tips" className="relative py-8 md:py-12 overflow-hidden">
    <div className="container relative px-4 md:px-6">
      <div className="text-center space-y-4 mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center justify-center text-primary">
          <Sparkles className="h-6 w-6 md:h-8 md:w-8 mr-3 md:mr-4 text-accent" />
          AI Driving Assistant
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Get real-time, AI-powered driving tips based on current traffic, weather, and road conditions in Altrincham, Manchester.
        </p>
      </div>
      <DrivingTipsForm />
    </div>
  </section>
);

const ContactSection = ({ preSelectedPlan }: { preSelectedPlan?: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedPlan, setSelectedPlan] = useState<string>(preSelectedPlan || '');
  const [isClient, setIsClient] = useState(false);

  // Ensure component is client-side rendered
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update selected plan when preSelectedPlan prop changes
  useEffect(() => {
    if (preSelectedPlan) {
      setSelectedPlan(preSelectedPlan);
    }
  }, [preSelectedPlan]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      plan: formData.get('plan') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Open user's email client with pre-filled data
        window.location.href = result.mailtoUrl;
        setSubmitStatus('success');
        console.log('📧 Opening email client with pre-filled data');
      } else {
        setSubmitStatus('error');
        console.error('❌ Form processing failed:', result.message);
      }
    } catch (error) {
      console.error('❌ Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset button state after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="relative py-8 md:py-12 overflow-hidden">
      <div className="container relative px-4 md:px-6">
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="text-base md:text-lg text-muted-foreground">Have questions? Want to book a lesson? Reach out to us!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Card className="shadow-lg bg-background/70 backdrop-blur-sm flex flex-col border-0">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Request Information</CardTitle>
              <CardDescription className="text-sm md:text-base">Fill out the form and we'll open your email client with a pre-filled message to send to us.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" suppressHydrationWarning className="text-sm md:text-base bg-transparent border-border focus:bg-transparent" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" suppressHydrationWarning className="text-sm md:text-base bg-transparent border-border focus:bg-transparent" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm md:text-base">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" suppressHydrationWarning className="text-sm md:text-base bg-transparent border-border focus:bg-transparent" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="plan" className="text-sm md:text-base">Interested Plan</Label>
                  {isClient ? (
                    <Select name="plan" value={selectedPlan} onValueChange={setSelectedPlan}>
                      <SelectTrigger className="text-sm md:text-base bg-transparent border-border focus:bg-transparent">
                        <SelectValue placeholder="Select a plan..." />
                      </SelectTrigger>
                      <SelectContent>
                        {planOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="text-sm md:text-base bg-transparent border border-border rounded-md px-3 py-2 text-muted-foreground">
                      Select a plan...
                    </div>
                  )}
                  {/* Hidden input to ensure plan value is included in form data */}
                  <input type="hidden" name="plan" value={selectedPlan} />
                </div>
                <div className="space-y-2 flex-grow flex flex-col">
                  <Label htmlFor="message" className="text-sm md:text-base">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your questions or comments..." className="flex-grow text-sm md:text-base bg-transparent border-border focus:bg-transparent" suppressHydrationWarning required />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full bg-accent text-accent-foreground hover:bg-accent/90 button-3d text-sm md:text-base transition-all duration-300 ${
                    submitStatus === 'success' ? 'bg-green-600 hover:bg-green-600 text-white' :
                    submitStatus === 'error' ? 'bg-red-600 hover:bg-red-600 text-white' : ''
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 
                   submitStatus === 'success' ? 'Opening Email Client... ✓' :
                   submitStatus === 'error' ? 'Failed to Process ✗' :
                   'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6 md:space-y-8 flex flex-col">
            <Card className="shadow-lg bg-background/70 backdrop-blur-sm border-0 flex-shrink-0">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <a href="#" className="flex items-center hover:text-primary transition-colors text-sm md:text-base">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-3 text-red-500 flex-shrink-0" />
                  <span>Based in Altrincham, Manchester</span>
                </a>
                <a href="mailto:baqimuhammad42@gmail.com" className="flex items-center hover:text-primary transition-colors text-sm md:text-base">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 mr-3 text-accent flex-shrink-0" />
                  <span>baqimuhammad42@gmail.com</span>
                </a>
                <a href="tel:+447939662421" className="flex items-center hover:text-primary transition-colors text-sm md:text-base">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-3 text-green-500 flex-shrink-0" />
                  <span>+44 7939 662421</span>
                </a>
                <a href="https://wa.me/447939662421" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors text-sm md:text-base">
                   <Image src="https://res.cloudinary.com/duyxw8aet/image/upload/v1753977352/Whatsapp-Logo-PNG-Images-HD_xyrklr.png" alt="WhatsApp" width={16} height={16} className="w-4 h-4 md:w-5 md:h-5 mr-3 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </CardContent>
            </Card>
             <div className="rounded-lg shadow-lg w-full flex-grow min-h-[300px] md:min-h-[400px] lg:min-h-[450px] overflow-hidden">
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
};

const Footer = () => (
  <footer>
    <div className="container relative py-6 text-center text-muted-foreground px-4 md:px-6">
      <p>&copy; {new Date().getFullYear()} Top Driving School. All rights reserved.</p>
    </div>
  </footer>
);


export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handlePlanSelection = (planValue: string) => {
    setSelectedPlan(planValue);
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,_rgba(28,31,109,0.5)_0%,_rgba(49,10,82,0.3)_40%,_transparent_85%),_radial-gradient(ellipse_at_top_right,_rgba(230,240,255,0.15)_0%,_rgba(41,98,255,0.2)_30%,_transparent_70%),_linear-gradient(to_bottom,transparent_40%,_rgba(20,40,90,0.5)_100%)]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PricingSection onPlanSelect={handlePlanSelection} />
        <TestimonialsSection />
        <AiTipsSection />
        <ContactSection preSelectedPlan={selectedPlan} />
      </main>
      <Footer />
    </div>
  );
}
