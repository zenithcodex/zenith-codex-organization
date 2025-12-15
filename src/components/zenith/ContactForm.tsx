"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Protocol requires a valid identifier (min 2 chars).",
    }),
    email: z.string().email({
        message: "Invalid transmission frequency (email address).",
    }),
    message: z.string().min(10, {
        message: "Payload too small. Minimum 10 characters required.",
    }),
});

export default function ContactForm() {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log(values);

        toast({
            title: "Transmission Successful",
            description: "Uplink established. We will respond to your frequency shortly.",
            variant: "default",
            className: "bg-zenith-surface border-zenith-cyan text-zenith-white",
        });

        setIsSubmitting(false);
        setOpen(false);
        form.reset();
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-4 bg-zenith-cyan text-zenith-black px-8 py-4 font-mono font-bold uppercase tracking-wider overflow-hidden"
                >
                    <span className="relative z-10">Initialize Uplink</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                </motion.button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-zenith-base border-zenith-surface text-zenith-text">
                <DialogHeader>
                    <DialogTitle className="font-heading text-2xl uppercase text-zenith-white">Establish Connection</DialogTitle>
                    <DialogDescription className="font-mono text-zenith-text/60">
                        Enter your credentials and payload below. Secure channel active.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-mono text-xs uppercase text-zenith-cyan">Identifier</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Codename or Real Name" {...field} className="bg-zenith-surface border-zenith-surface focus:border-zenith-cyan font-mono" />
                                    </FormControl>
                                    <FormMessage className="font-mono text-xs text-red-400" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-mono text-xs uppercase text-zenith-cyan">Frequency (Email)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name@domain.com" {...field} className="bg-zenith-surface border-zenith-surface focus:border-zenith-cyan font-mono" />
                                    </FormControl>
                                    <FormMessage className="font-mono text-xs text-red-400" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-mono text-xs uppercase text-zenith-cyan">Payload</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Project details or objective..."
                                            {...field}
                                            className="bg-zenith-surface border-zenith-surface focus:border-zenith-cyan font-mono min-h-[100px]"
                                        />
                                    </FormControl>
                                    <FormMessage className="font-mono text-xs text-red-400" />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-zenith-cyan text-zenith-black hover:bg-zenith-white font-mono font-bold uppercase"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Transmitting...
                                </>
                            ) : (
                                <>
                                    Send Data
                                    <Send className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
