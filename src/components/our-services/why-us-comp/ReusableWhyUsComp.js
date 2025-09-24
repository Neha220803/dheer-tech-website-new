import React from "react";
import { Users, Lightbulb, HeadphonesIcon } from "lucide-react";

const ReusableWhyComponent = ({
  title = "Why Choose",
  highlightText = "DheerTech?",
  highlightColor = "text-primary-400",
  subtitle = "Discover What Makes DheerTech Your Best Path to Success",
  cardData = [
    {
      title: "Expert Team",
      text: "Our experienced professionals deliver cutting-edge solutions tailored to your needs.",
      icon: Users,
    },
    {
      title: "Innovation Focus",
      text: "We stay ahead of technology trends to provide you with the most advanced solutions.",
      icon: Lightbulb,
    },
    {
      title: "Reliable Support",
      text: "24/7 customer support ensures you're never alone in your journey to success.",
      icon: HeadphonesIcon,
    },
  ],
  showHighlight = true,
  showBadge = true,
  badgeText = "Empowering Business",
}) => {
  return (
    <div className="bg-neutral-700 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {showBadge && (
          <div className="mb-6">
            <div className="inline-block bg-neutral-600 text-neutral-200 px-4 py-2 rounded-full text-sm font-semibold">
              {badgeText}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}{" "}
            {showHighlight && (
              <span className={highlightColor}>{highlightText}</span>
            )}
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl">{subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-neutral-600 rounded-3xl p-6 h-full hover:bg-neutral-500 transition-colors duration-300"
              >
                {IconComponent && (
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary-400 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-neutral-300 text-base leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReusableWhyComponent;
