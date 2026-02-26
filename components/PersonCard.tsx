import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
};

export default function PersonCard({ name, role, image }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-brand-light">
      <div className="relative h-64 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-brand-primary">
          {name}
        </h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
}