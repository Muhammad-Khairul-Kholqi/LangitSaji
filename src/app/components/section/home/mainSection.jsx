"use client"

import Link from "next/link";
import Image from "next/image";
import ImageMain from "@/app/assets/food.png";
import BackgroundImage from "@/app/assets/bg-main-section.jpg";
import { motion } from "framer-motion";

export default function MainSection() {
    return (
        <section className="relative">
            <div className="absolute inset-0 bg-cover bg-center -z-10" style={{ backgroundImage: `url(${BackgroundImage.src})` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black to-black/70" />
            </div>

            <div className="relative flex justify-center p-5">
                <div className="w-full max-w-[1200px]">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 py-10">
                        <div className="flex flex-col items-center md:items-start space-y-4 text-white">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-wider leading-15"
                            >
                                Hidangan Lokal<br />
                                yang Menghadirkan<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                                    Rasa Rumah Sejati
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="w-full max-w-[600px] tracking-wider"
                            >
                                Langit Saji menyuguhkan pengalaman kuliner Nusantara dengan sentuhan khas rumahan. Dari aroma dapur tradisional hingga penyajian penuh kehangatan.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex items-center gap-4"
                            >
                                <Link href="" className="py-2 px-4 bg-gradient-to-br from-[#FCE700] to-[#F67111] hover:scale-105 duration-300 font-medium rounded-tr-2xl rounded-bl-2xl text-white tracking-wider">
                                    Order Sekarang
                                </Link>
                                <Link href="" className="text-[#F67111] hover:text-[#FCE700] transition-colors font-medium tracking-wider">
                                    Jelajahi Menu
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <Image
                                src={ImageMain}
                                alt="Hidangan khas Langit Saji"
                                className="w-72 sm:w-96 md:w-96 lg:w-[450px] h-auto mx-auto md:mx-0"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}