import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-college-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your PM Workflow?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the waitlist or book a demo to see how our AI agent can 10x your productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Get Started Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" placeholder="Product Manager, Founder, etc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your PM challenges</Label>
                <Textarea
                  id="message"
                  placeholder="What takes up most of your time? What would you like to automate?"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-college-blue hover:bg-college-blue-dark text-lg py-3">Join Waitlist</Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-college-blue text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 mr-4 text-college-blue" />
                  <div>
                    <h3 className="text-xl font-semibold">Book a Demo</h3>
                    <p className="text-emerald-100">30-minute personalized walkthrough</p>
                  </div>
                </div>
                <Button className="w-full bg-white text-college-blue hover:bg-gray-100">Schedule Demo Call</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-college-blue mr-3" />
                    <span className="text-gray-700">Contact@progresstechsolutions.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-college-blue mr-3" />
                    <span className="text-gray-700">(800) 889-8394</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-college-blue mr-3" />
                    <span className="text-gray-700">3913 Tunstall Dr, Frisco, TX</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-college-blue mr-2">1.</span>
                  We'll review your submission within 24 hours
                </li>
                <li className="flex items-start">
                  <span className="text-college-blue mr-2">2.</span>
                  Schedule a personalized demo call
                </li>
                <li className="flex items-start">
                  <span className="text-college-blue mr-2">3.</span>
                  Get early access to our AI agent
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
