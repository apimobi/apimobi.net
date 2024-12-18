import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface ExperienceData {
    company: string,
    role: string,
    start_date: string,
    end_date: string,
    description: string,
    skills: string,
    icon: string,
}

interface ExperienceProps {
    id: string,
    data: ExperienceData,
}

export default function Experience({ id, data }: ExperienceProps) {

    return (

        <Collapsible className="pb-2">
            <Card>
                <CardHeader>

                    <CollapsibleTrigger><CardTitle className="text-left">{data.company}</CardTitle></CollapsibleTrigger>
                    <CardDescription>{data.role}</CardDescription>

                </CardHeader>
                <CollapsibleContent>
                    <CardContent>
                        <p>{data.description}</p>
                    </CardContent>
                </CollapsibleContent>
            </Card>
        </Collapsible>
    );
}
