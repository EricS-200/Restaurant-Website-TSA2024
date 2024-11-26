import Image from "next/image";
import 

const test_img_count = 5

export default function HorizontalScroll() {
  return (
    <div className="bg-blue-300 h-screen sticky top-0 flex items-center overflow-hidden">
      {() => {for (let i=0; i<test_img_count; i++)
        {
        return <Image/>
        }}
      }  
    </div>
  );
}
