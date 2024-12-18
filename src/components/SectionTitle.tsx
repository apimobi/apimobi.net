import { Separator } from "@/components/ui/separator"

export default function SectionTitle({ str }: { str: string }) {

    return (
        <div className='text-left text-black font-bold text-base/6 pb-2'>
            <span>{str}</span>
            <Separator />
        </div>
    );
}
