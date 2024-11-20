"use client";

import { useState } from "react";
import {
  MessageSquare,
  Search,
  HelpCircle,
  Mail,
  Phone,
  MessagesSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How does the AI analysis work?",
    answer:
      "Our AI analyzes product details, reviews, and pricing history across multiple platforms to provide comprehensive insights about quality, value, and authenticity.",
  },
  {
    question: "Can I track prices across different stores?",
    answer:
      "Yes, you can track prices across multiple stores and set up alerts for when prices drop below your target price.",
  },
  {
    question: "How accurate is the price history?",
    answer:
      "Our price history data is collected in real-time from various sources and is typically accurate within a few minutes of any price changes.",
  },
];

export default function SupportContent() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("general");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with your support ticket system
    // For example, using Zendesk, Intercom, or a custom solution
    console.log({ email, subject, message, category });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Support Center
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Get help with your questions and issues
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Support Options */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold">Live Chat</h2>
            <p className="mt-2 text-gray-600">
              Chat with our support team in real-time during business hours.
            </p>
            <button className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800">
              Start chat →
            </button>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold">Phone Support</h2>
            <p className="mt-2 text-gray-600">
              Call us directly for urgent matters.
            </p>
            <p className="mt-4 text-indigo-600">+1 (888) 123-4567</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
              <MessagesSquare className="h-6 w-6 text-white" />
            </div>
            <h2 className="mt-4 text-xl font-semibold">Community</h2>
            <p className="mt-2 text-gray-600">
              Join our community forum for tips and discussions.
            </p>
            <button className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-800">
              Visit forum →
            </button>
          </div>
        </div>

        {/* Support Ticket Form */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Submit a Support Ticket
            </h2>
            <p className="mt-2 text-gray-600">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="general">General Question</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing</option>
                  <option value="feature">Feature Request</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Ticket
              </button>
            </form>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-gray-200 p-6"
              >
                <dt className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
