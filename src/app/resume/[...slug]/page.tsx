// import "./style.css";
// import { FEATURES_DATA_EXPERIENCES, FEATURES_DATA_RECOMMENDATIONS } from "@/data/mockData";
import Experience from "@/components/Experience";
import Recommendation from "@/components/Recommendation";
import SectionTitle from "@/components/SectionTitle";
import Header from "@/components/Header";
import SkillBarChart from "@/components/SkillBarChart";
import { notFound } from "next/navigation";
import Education from "@/components/Education";


interface Data {
  skills: [],
  recommendations: [],
  experiences: [],
  interests: [],
  education: []
}

const getData = async (profile: string) => {
  // "use server";
  // TODO cache data
  console.log("----------------------");
  console.log(`${process.env.API_URL}?profile=${profile}`);
  const res = await fetch(`${process.env.API_URL}?profile=${profile}`, {
    headers: { 'jwtToken': `${process.env.TOKEN}` }
  });

  try {
    return await res.json();
  } catch (e) {
    console.log('error', e);
  }

  return {
    skills: [],
    recommendations: [],
    experiences: [],
    interests: [],
    education: []
  }
};




export default async function Resume(
  { params }: {
    params: Promise<{ slug: string }>
  }) {

  const slug = (await params).slug;
  if (slug.length < 2) return notFound();
  const path = `${slug[0]}/${slug[1]}`;
  if (path !== process.env.RESUME_0 && path !== process.env.RESUME_1) return notFound();

  const data: Data = await getData(slug[1]);

  return (
    <div className="mt-2 flex flex-col items-center ">
      <div className="w-full sm:max-w-[48rem]  bg-blue-50 rounded-3xl 
        shadow-xl mx-auto print:w-[52rem] print:h-[100vh] print:aspect-[8.5/11] print:rounded-none
        print:shadow-none">
              {/* MAIN CONTAINER */}
              <div className="flex flex-col p-4 md:p-5 print:p-16">
                {/* HEADER */}
                <Header data={data} />
                <span className="mb-6"></span>

                {/* GRID SM-1 MD-12 */}
                <div className="grid grid-cols-1 md:grid-cols-12 print:flex-row gap-4">
                  {/* SKILLS */}
                  <div className="md:col-span-5  flex flex-col text-base/6">
                    {/*<div className="sm:hidden print:hidden">
                      <p>PHP/Symfony</p>
                      <p>Python</p>
                      <p>Reactjs/Nextjs</p>
                    </div> */}
                    <SectionTitle str="Skills" />
                    <SkillBarChart skills={data.skills} />
                  </div>

                  {/* RECOMMENDATIONS */}
                  <div className="md:col-span-7 flex flex-col gap-4">
                    <SectionTitle str="Recommendations" />
                    {data.recommendations.map((feature, index) => {
                      return (
                        <Recommendation id={`reco-${index}`} data={feature} />
                      );
                    }
                    )}
                  </div>

                  {/* EXPERIENCES */}
                  <div className="md:col-span-12 flex flex-col p-4 md:p-5 print:p-16">
                    <SectionTitle str="Expériences" />
                    {data.experiences.map((feature, index) => {
                      return (
                        <>
                          <Experience id={`exp-${index}`} data={feature} />
                        </>
                      );
                    }
                    )}
                  </div>

                  {/* EDUCATION */}
                  <div className="md:col-span-12 flex flex-col p-4 md:p-5 print:p-16">
                    <SectionTitle str="Education" />
                      {data.education.map((feature, index) => {
                        return (
                          <>
                            <Education id={`exp-${index}`} data={feature} />
                          </>
                        );
                      }
                    )}
                  </div>

                {/* END GRID */}
                </div>

              {/* END MAIN CONTAINER */}
              </div>  
      </div>
    </div>
  );
}
