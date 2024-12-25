import { cn } from "@/utils/utils";

export default function Button({
  transparent = false,
  className,
  children,
  ...props
}) {
  let transparency = transparent
    ? "hover:bg-gray-300 active:bg-gray-400"
    : "bg-black text-white  hover:bg-zinc-800  active:bg-zinc-600";

  return (
    <button
      {...props}
      className={cn(
        "transition-all duration-100 rounded-xl py-1 px-3 border-[1px] border-black hover:border-zinc-800 active:border-zinc-600",
        transparency,
        className
      )}
    >
      {children}
    </button>
  );
}
