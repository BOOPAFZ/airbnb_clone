import ReservationSidebar from "@/app/components/poroperties/ReservationSidebar";
import Image from "next/image";
const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src= '/beach_1.jpg'
                    className="object-cover w-full h-full"
                    alt="beach house"
                />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>
                    <hr />
                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src='/prpic1.jpeg'
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="prf-pic"
                        />

                        <p><strong>mouad w9</strong> is your host</p>
                    </div>
                    <hr />
                    <p className="mt-6 text-lg">The Villa D'Este in Tivoli, Italy, is renowned for its breathtaking Renaissance gardens and magnificent fountains. It was commissioned by Cardinal Ippolito II d'Este in the 16th century. The villa's garden is considered one of the most beautiful gardens in Italy, featuring a series of terraces, grottos, and cascading waterfalls. One of its most famous features is the "Hundred Fountains" – a stunning pathway adorned with numerous small spouting fountains. The entire garden is an example of the grandeur and opulence of Renaissance landscaping and architecture.</p>
                </div>
                <ReservationSidebar />
            </div>
        </main>
    )
}

export default PropertyDetailPage;