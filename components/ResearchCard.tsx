type Props = {
  title: string;
  description: string;
};

export default function ResearchCard({ title, description }: Props) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-brand-light hover:border-brand-primary hover:shadow-xl transition duration-300">
      <h3 className="text-2xl font-semibold mb-4 text-brand-primary">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}