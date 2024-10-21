
type MasonrylayoutProps = {
    items: { imageUrl: string }[];
};

export const MasonaryLayout = ({items}: MasonrylayoutProps) => {
    return <div className="columns-1 mx-2 lg:columns-7 py-4 md:columns-4 sm:columns-5 lg:py-2 gap-4"> 
     {items.map((item) => (<div className="mb-4 break-inside-avoid"><img src={item.imageUrl} className="w-full object-cover rounded-lg"></img></div>))}
    </div>
  ;
}