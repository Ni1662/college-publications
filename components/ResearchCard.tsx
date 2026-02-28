type Props = {
  title: string;
  points: string[];
};

export default function ResearchCard({ title, points }: Props) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-brand-light hover:border-brand-primary hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-semibold mb-6 text-brand-primary">
        {title}
      </h3>

      <ul className="space-y-4">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-700"
          >
            {/* Custom Bullet */}
            <span className="mt-2 h-2 w-2 rounded-full bg-brand-primary shrink-0" />

            <span className="leading-relaxed">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}