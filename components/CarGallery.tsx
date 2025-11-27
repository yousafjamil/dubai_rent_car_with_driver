import Image from 'next/image'

interface Props {
  images: string[]
}

export default function CarGallery({ images }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {images.map((img, i) => (
        <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md">
          <Image src={img} alt={`Car image ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      ))}
    </div>
  )
}