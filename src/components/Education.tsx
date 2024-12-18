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


interface EducationData {
    etablissement: string,
    diploma: string,
    start_date: string,
    end_date: string,
    description: string,
    icon: string,
}

interface EducationProps {
    id: string,
    data: EducationData,
}

export default function Education({ id, data }: EducationProps) {

    return (

        <Collapsible className="pb-2">
            <Card>
                <CardHeader>

                    <CollapsibleTrigger><CardTitle className="text-left">{data.etablissement}</CardTitle></CollapsibleTrigger>
                    <CardDescription>{data.diploma}</CardDescription>

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
