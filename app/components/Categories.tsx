import Image from "next/image";

const Categories: React.FC = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/idc_category1.jpg'
                    alt='category - Cabins'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Cabins</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/idc_category2.jpg'
                    alt='category - Cabins'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Amazing Views</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/idc_category3.jpg'
                    alt='category - Cabins'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Tiny Homes</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/idc_category4.jpg'
                    alt='category - Cabins'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Lakefront</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/idc_category5.jpg'
                    alt='category - Cabins'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Mansions</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/idc_category6.jpg'
                    alt='category - Cabins'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Amazing pools</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/idc_category7.jpg'
                    alt='category - Cabins'
                    width={20}
                    height={20}
                />
                <span className="text-xs">OMG!</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src='/idc_category8.jpg'
                    alt='category - Cabins'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Treehouses</span>
            </div>
        </div>
    );
}

export default Categories;
