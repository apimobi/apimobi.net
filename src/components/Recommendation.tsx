import { Badge } from "@/components/ui/badge"

interface RecommendationData {
    name: string,
    role: string,
    date: string,
    message: string,
}

interface RecommendationProps {
    id: string,
    data: RecommendationData,
}

export default function Recommendation({ id, data }: RecommendationProps) {

    return (
        <div id={"sec-" + id} className='px-4 py-2 text-justify'>
            <div>{data.name}</div>
            <Badge variant="outline">{data.role}</Badge>
            <div>
                <p>
                    {data.message.substring(0, 100)} 
                    {data.message.length >= 100 && '...'}
                </p>
            </div>
        </div>
    );
}
