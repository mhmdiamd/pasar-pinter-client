"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z.string({ required_error: "email is required" }).min(2, {
    message: "email is required",
  }),

  name: z.string({ required_error: "name is required" }).min(2, {
    message: "name is required",
  }),

  message: z.string({ required_error: "message is required" }).min(2, {
    message: "message is required",
  }),
});

export function ContactUsForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Input your name"
                  className="text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-start" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Input your email"
                  className="text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-start" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-start" />
            </FormItem>
          )}
        />
        <div className="flex">
          <button className="w-full" type="submit">
            Send
          </button>
        </div>
      </form>
    </Form>
  );
}
