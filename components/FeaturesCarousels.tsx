"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScrollCarousel;

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};


type CardType = {
    url: string;
    title: string;
    id: number;
};

const cards: CardType[] = [
    {
        url: "/2.jpg",
        title: "Invest",
        id: 1,
    },
    {
        url: "/3.jpg",
        title: "Save",
        id: 2,
    },
    {
        url: "/3.jpg",
        title: "Grow",
        id: 3,
    },
    {
        url: "/4.jpg",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/2.jpg",
        title: "Lorem",
        id: 5,
    },
    {
        url: "/3.jpg",
        title: "Epsum",
        id: 6,
    },
    {
        url: "/4.jpg",
        title: "Lorem",
        id: 7,
    },
];