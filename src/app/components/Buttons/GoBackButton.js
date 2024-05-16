import Link from "next/link";

export default function GoBackButton() {
    return (
        <Link href={"/"}
              className={"inline-block group text-white bg-black pt-3 pb-2.5 px-4 w-fit mb-12 md:mb-20"}>
                <span className="mr-3">←</span>Retour
        </Link>
    );
}