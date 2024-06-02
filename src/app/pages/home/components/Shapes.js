import ScrollDownButton from "@/app/components/Buttons/ScrollDownButton";

export function Shapes() {
    return (
        <div className="relative size-80">
            <div className="w-full h-full grid grid-cols-2 gap-8 rotate-45">
                <div className="size-full bg-white"></div>
                <div className="size-full bg-white"></div>
                <div className="size-full bg-white"></div>
                <div className="size-full bg-white"></div>
            </div>
        </div>
    );
}