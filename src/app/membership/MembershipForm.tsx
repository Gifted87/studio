"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  company: z.string().optional(),
  membershipType: z.enum(["corporate", "individual", "student"], {
    required_error: "You need to select a membership type.",
  }),
});

export function MembershipForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Application Submitted!",
      description: "Thank you for registering. Please proceed to payment to complete your application.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+234 800 123 4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company / Institution (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your Company Ltd." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="membershipType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Membership Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Submit Application
        </Button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">After submitting, please complete your registration by paying the membership fee via one of our secure payment partners.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="w-full sm:w-auto" variant="outline">
                <a href="https://paystack.com/" target="_blank" rel="noopener noreferrer">Pay with Paystack</a>
            </Button>
            <Button asChild className="w-full sm:w-auto" variant="outline">
                <a href="https://flutterwave.com/" target="_blank" rel="noopener noreferrer">Pay with Flutterwave</a>
            </Button>
        </div>
      </div>
    </Form>
  );
}
