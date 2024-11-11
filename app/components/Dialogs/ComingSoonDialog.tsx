import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC, ReactNode } from "react";
import ContactUsDrawer from "../Drawers/ContactUsDrawer";
import { Button } from "@/components/ui/button";

type TProps = {
  children: ReactNode;
};

const ComingSoonDialog: FC<TProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-start">
            Website is under development
          </DialogTitle>
          <DialogDescription asChild>
            <div className="flex flex-col gap-y-3 text-start py-3">
              <p className="text-justify">
                Our website is currently under development, and we’re working
                hard to bring you an amazing experience. While we’re putting the
                finishing touches on everything, you can expect an intuitive,
                user-friendly platform that will help you give the best
                experience for analytze the market for your busniness idea.
              </p>

              <p>
                Stay tuned for updates! We{"'"}re excited to share what{"'"}s
                coming.
              </p>
              <p>
                In the meantime, feel free to contact us or follow our social
                media
              </p>

              <p>Thank you for your patience, and we can’t wait to launch!</p>

              <ContactUsDrawer>
                <Button className="w-fit mt-3">Contact us</Button>
              </ContactUsDrawer>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
