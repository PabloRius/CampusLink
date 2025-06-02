import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShoppingBag,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CL</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                CampusLink
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="#applications"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Applications
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
              <Button asChild>
                <Link href="mailto::pablogrius@gmail.com">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Revolutionizing Student Engagement
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting University
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Communities
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              CampusLink develops tailored applications that enhance student
              community engagement through private marketplaces, event
              organization, and social networking - exclusively for your
              university.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <Link href="#applications">
                  Explore Our Apps
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why CampusLink?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe every university deserves a thriving digital community.
              Our applications are designed specifically for student needs,
              creating secure, private environments for each campus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Private Communities</CardTitle>
                <CardDescription>
                  Exclusive access for verified students from your university,
                  ensuring a safe and relevant environment.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Student Marketplace</CardTitle>
                <CardDescription>
                  Buy, sell, and trade items within your campus community. From
                  textbooks to furniture, everything students need.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Event Organization</CardTitle>
                <CardDescription>
                  Discover and organize campus events, study groups, and social
                  activities with fellow students.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Link href="#applications">Our Applications</Link>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each application is customized for specific universities, creating
              unique digital ecosystems that reflect each campus culture and
              needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center justify-between">
            {/* King Social Card */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">King Social</CardTitle>
                    <Badge
                      variant="default"
                      className="bg-green-100 text-green-800"
                    >
                      In Progress
                    </Badge>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">KS</span>
                  </div>
                </div>
                <CardDescription className="text-base">
                  The flagship application for Kingston University students.
                  Connect, trade, and organize events within the Kingston
                  community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      Student community forums
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShoppingBag className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      Private marketplace for Kingston students
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      Campus event organization
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">
                      Study group coordination
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Button className="flex-1" asChild>
                    <Link href="https://king-social.vercel.app" target="_blank">
                      Visit King Social
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {/* <Button variant="outline">Learn More</Button> */}
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon Applications */}
            <div className="space-y-6 h-full flex justify-evenly flex-col">
              <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-600">
                        Your University Next
                      </CardTitle>
                      <Badge variant="secondary">Coming Soon</Badge>
                    </div>
                    <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 font-bold">?</span>
                    </div>
                  </div>
                  <CardDescription>
                    We&apos;re expanding to more universities. Contact us to
                    bring CampusLink to your campus.
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  Interested in CampusLink for your university?
                </h3>
                <p className="mb-4 opacity-90">
                  Join our waitlist and be the first to know when we launch at
                  your campus.
                </p>
                <Button variant="secondary">
                  <Link href="http://wa.me/447351830598" target="_blank">
                    Join Waitlist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1</div>
              <div className="text-gray-600">University Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                1,200+
              </div>
              <div className="text-gray-600">Marketplace Items</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Campus?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get in touch to discuss bringing CampusLink to your university or
              learn more about our existing applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>pablogrius@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+44 (0) 7351 830598</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Kingston University, London, UK</span>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Get Started</CardTitle>
                <CardDescription className="text-gray-300">
                  Interested in CampusLink? Send us a message and we&apos;ll get
                  back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    asChild
                  >
                    <Link href="mailto::pablogrius@gmail.com">Contact Us</Link>
                  </Button>
                  {/* <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Schedule a Demo
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">CL</span>
              </div>
              <span className="font-bold text-white">CampusLink</span>
            </div>
            <div className="text-sm">
              © 2024 CampusLink. All rights reserved. | Dissertation Project -
              Kingston University
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
