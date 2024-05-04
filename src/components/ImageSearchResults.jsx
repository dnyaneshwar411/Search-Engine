import Link from "next/link";

export default function ImageSearchResults({data}){
return <div className="mt-4 pb-24">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 gap-4">

    {data.items?.map(item=><div key={item.link} className="group mb-8">
    <div className="">
      <Link href={item.image.contextLink}>
        <img src={item.link} alt={item.title} className="h-60 group-hover:shadow-2xl w-full object-contain transition-shadow"/>
      </Link>
      <Link href={item.image.contextLink}>
        <h2 className="group-hover:underline truncate text-xl">{item.title}</h2>
      </Link>
      <Link href={item.image.contextLink}>
        <p className="group-hover:underline text-gray-600">{item.displayLink}</p>
      </Link>
    </div>
    </div>)}
    
  </div>
</div>
}