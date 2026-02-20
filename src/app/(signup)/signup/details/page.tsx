"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignupProgress } from "@/components/layout/SignupProgress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CTAButton } from "@/components/shared/CTAButton";

export default function DetailsPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (form.name.length < 2) errs.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email address";
    if (form.phone && !/^(\+?64|0)[2-9]\d{7,9}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Please enter a valid NZ phone number";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContinue = () => {
    if (!validate()) return;
    sessionStorage.setItem("user_details", JSON.stringify(form));
    router.push("/signup/install");
  };

  return (
    <div style={{ viewTransitionName: "signup-content" }}>
      <SignupProgress currentStep={3} totalSteps={5} />
      <div className="max-w-md mx-auto px-6 py-12">
        <h1 className="font-display font-bold text-2xl md:text-4xl text-dark mb-8 text-center">
          Tell us about yourself
        </h1>

        <div className="space-y-5">
          <div>
            <Label htmlFor="name" className="font-body text-dark font-medium text-sm mb-1.5 block">Full name</Label>
            <Input
              id="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`bg-white border-2 rounded-lg px-4 py-3 font-body ${errors.name ? "border-red" : "border-dark"} focus:border-teal`}
            />
            {errors.name && <p className="text-red text-xs font-body mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="font-body text-dark font-medium text-sm mb-1.5 block">Email address</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`bg-white border-2 rounded-lg px-4 py-3 font-body ${errors.email ? "border-red" : "border-dark"} focus:border-teal`}
            />
            {errors.email && <p className="text-red text-xs font-body mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="phone" className="font-body text-dark font-medium text-sm mb-1.5 block">
              Phone number <span className="text-dark/40 font-normal">(for installation updates only)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={`bg-white border-2 rounded-lg px-4 py-3 font-body ${errors.phone ? "border-red" : "border-dark"} focus:border-teal`}
            />
            {errors.phone && <p className="text-red text-xs font-body mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <CTAButton variant="primary" size="lg" onClick={handleContinue} fullWidth>
            Continue
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
