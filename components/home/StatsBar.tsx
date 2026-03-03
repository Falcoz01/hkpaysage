"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { company } from "@/data/company";

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section
      ref={ref}
      className="bg-white border-y border-cream-200 py-8"
      aria-label="Chiffres clés"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-cream-200">
          {company.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center lg:px-8"
            >
              <dt className="text-sm text-gray-500 font-medium order-last mt-1">
                {stat.label}
              </dt>
              <dd className="font-display text-3xl lg:text-4xl font-bold text-forest-700">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
