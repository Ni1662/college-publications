import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
};

export default function PersonCard({ name, role, image }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-brand-light group">
      
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-brand-primary font-medium">
          {role}
        </p>
      </div>
    </div>
  );
}