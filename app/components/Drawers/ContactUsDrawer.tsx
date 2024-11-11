"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC, ReactNode, useState } from "react";
import { ContactUsForm } from "../Forms/ContactUsForm";
import { useMediaQuery } from "@/hooks/use-media-query";

type TProps = {
  children: ReactNode;
};

const ContactUsDrawer: FC<TProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Have questions or need help? Get in touch with us! We’re here to
              assist you and improve your PasarPintar experience.
            </DialogDescription>
          </DialogHeader>
          <ContactUsForm />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto max-w-xl">
          <DrawerHeader>
            <DrawerTitle className="text-start">Contact Us</DrawerTitle>
            <DrawerDescription className="text-start mb-3">
              Have questions or need help? Get in touch with us! We’re here to
              assist you and improve your PasarPintar experience.
            </DrawerDescription>

            <ContactUsForm />
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactUsDrawer;
