import "./style.css";
// import { FEATURES_DATA_EXPERIENCES, FEATURES_DATA_RECOMMENDATIONS } from "@/data/mockData";
import Experience from "@/components/experience";
import Recommendation from "@/components/recommendation";
import SectionTitle from "@/components/sectionTitle";
// import SkillRadarChart from "@/components/SkillRadarChart";
// import SkillBarChart from "@/components/SkillBarChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface Data {
  recommendations: [],
  experiences: [],
  interests: [],
  education: []
}

const getData = async () => {
  "use server";

  const res = await fetch(process.env.API_URL, {
    headers: { 'jwtToken': "okidoki"}
  });
  return await res.json();
};


export default async function Resume(
  { params }: {
    params: Promise<{ slug: string }>
  }) {

  const slug = (await params).slug;
  
  const data: Data = await getData();


  return (
    <div className="max-w-full min-h-screen bg-white px-4 print:px-0 py-4 print:py-0 ">
      <div className="w-full sm:max-w-[52rem] lg:aspect-[8.5/11] bg-blue-50 rounded-3xl shadow-xl mx-auto
                print:w-[52rem] print:h-[100vh] print:aspect-[8.5/11] print:rounded-none print:shadow-none">
        <div className="w-full flex flex-col p-4 md:p-5 print:p-16">
          <div className="w-full hidden sm:flex print:flex justify-between items-center">
            <div className="flex-1 flex pr-5">
              <Avatar >
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback>VM</AvatarFallback>
              </Avatar>
              <h2 className="flex-1 text-4xl font-[1000] pl-10">{slug[0]} {slug[1]}</h2>

            </div>
            

            
            <div className="items-center justify-center text-center"><p>Senior</p><p>Backend</p><p>Developper</p></div>
            <div className="flex-1 flex sm:justify-end print:justify-end">
              <div className="flex flex-col w-fit sm:items-end print:items-end gap-[2px]">
                <p>PHP/Symfony</p>
                <p>Python</p>
                <p>Reactjs/Nextjs</p>
              </div>
            </div>
          </div>

          <span className="mb-6"></span>

          <div className="grid grid-cols-1 md:grid-cols-12 print:flex-row gap-4">

            {/* first column */}
            <div className="md:col-span-5  flex flex-col  bg-gray-100 text-base/6">
              <div className="sm:hidden print:hidden">
                <p>PHP/Symfony</p>
                <p>Python</p>
                <p>Reactjs/Nextjs</p>
              </div>

              <SectionTitle  str="Skills"/>

              {/* <SkillBarChart /> */}
              

            </div>




            <div className="md:col-span-7 flex flex-col gap-4 bg-gray-100">
              <SectionTitle  str="Recommendations"/>
              {data.recommendations.map((feature, index) => {
              return (
                <>
                  <Recommendation id={`reco-${index}`} data={feature} />
                </>

              );
            }
            )}
            </div>
          </div>


          <div className="w-full flex-col p-4 md:p-5 print:p-16">
            <SectionTitle  str="Expériences"/>
            {/* <Accordion type="single" collapsible className="w-full"> */}
            {data.experiences.map((feature, index) => {
              return (
                <>
                  <Experience id={`exp-${index}`} data={feature} />
                </>

              );
            }
            )}
            {/* </Accordion> */}
            <p className="text-4xl my-12">...</p>
            <p className="text-4xl mb-12">...</p>
            <p>More content</p>
          </div>
        </div>
      </div>
    </div>
  );
}
