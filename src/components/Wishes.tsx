import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

const wishes = [
  {
    name: "Mom & Dad",
    message: "Happy Birthday Thrilok! We are so proud of the person you've become. May this year bring you endless joy and success.",
    icon: Heart,
    color: "text-pink-500"
  },
  {
    name: "Saaketh",
    message: "Another year older, another year wiser (hopefully!). Have a blast, Thrilok!",
    icon: Sparkles,
    color: "text-purple-500"
  }
];

export const Wishes: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-center mb-12">Birthday Wishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-2xl bg-stone-50 ${wish.color}`}>
                  <wish.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-1">{wish.name}</h3>
                  <p className="text-stone-600 leading-relaxed italic">"{wish.message}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
