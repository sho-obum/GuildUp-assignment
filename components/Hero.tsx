"use client";
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import Posts from "./Posts";

export const Hero = () => {
    return (
        <div className="w-full py-12 lg:py-24">
            <div className="container mx-auto">
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4 flex-col items-start">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-3xl md:text-5xl sm:text-base tracking-tighter font-semibold">
                                Guildup Frontend Assignment
                            </h2>
                            <h2 className="text-xl md:text-2xl sm:text-base tracking-tighter font-light w-1/2">
                                Objective: Build a custom posts component that displays posts fetched from an API,
                                including functionality for nested comments,liking and sharing posts.
                            </h2>
                            <div className="flex flex-row gap-4 flex-wrap">
                                <Badge
                                    className="cursor-pointer hover:bg-primary/80 transition-color">
                                    Next.js
                                </Badge>
                                <Badge
                                    className="cursor-pointer hover:bg-primary/80 transition-color">
                                    React
                                </Badge>
                                <Badge
                                    className="cursor-pointer hover:bg-primary/80 transition-color">
                                    Tailwind
                                </Badge>
                                <Badge
                                    className="cursor-pointer hover:bg-primary/80 transition-color">
                                    ShadCn
                                </Badge>
                            </div>
                        </div>
                    </div>

                    <Posts />


                </div>
            </div>
        </div>
    );
};