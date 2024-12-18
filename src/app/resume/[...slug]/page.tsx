import "./style.css";
// import { FEATURES_DATA_EXPERIENCES, FEATURES_DATA_RECOMMENDATIONS } from "@/data/mockData";
import Experience from "@/components/Experience";
import Recommendation from "@/components/Recommendation";
import SectionTitle from "@/components/SectionTitle";
import Header from "@/components/Header";
// import SkillRadarChart from "@/components/SkillRadarChart";
import SkillBarChart from "@/components/SkillBarChart";
import { notFound } from "next/navigation";
import Education from "@/components/Education";
// import dynamic from 'next/dynamic'


// const DynamicChart = dynamic(() => import('@/components/SkillBarChart'), {
//   loading: () => <p>Loading...</p>,
// })


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
  return await res.json();
};




export default async function Resume(
  { params }: {
    params: Promise<{ slug: string }>
  }) {

  const slug = (await params).slug;
  const avatar = `/${slug[1]}_64.jpg`
  if (slug.length < 2) return notFound();
  const path = `${slug[0]}/${slug[1]}`;
  if (path !== process.env.RESUME_0 && path !== process.env.RESUME_1) return notFound();

  const data: Data = await getData(slug[1]);
  console.log("----------------------");
  console.log(data);

  return (
    <div className="max-w-full min-h-screen bg-white px-4 print:px-0 py-4 print:py-0 ">
      <div className="w-full sm:max-w-[52rem] lg:aspect-[8.5/11] bg-blue-50 rounded-3xl shadow-xl mx-auto
                print:w-[52rem] print:h-[100vh] print:aspect-[8.5/11] print:rounded-none print:shadow-none">


        <div className="flex flex-col p-4 md:p-5 print:p-16">
          {/* HEADER */}
          <Header data={data} />
          

          <span className="mb-6"></span>

          <div className="grid grid-cols-1 md:grid-cols-12 print:flex-row gap-4">
            {/* SKILLS */}
            <div className="md:col-span-5  flex flex-col  bg-blue-50 rounded-3xl text-base/6">
              {/*<div className="sm:hidden print:hidden">
                <p>PHP/Symfony</p>
                <p>Python</p>
                <p>Reactjs/Nextjs</p>
              </div> */}
              <SectionTitle str="Skills" />
              <SkillBarChart skills={data.skills} />
            </div>

            {/* RECOMMENDATIONS */}
            <div className="md:col-span-7 flex flex-col gap-4 bg-blue-50 rounded-3xl">
              <SectionTitle str="Recommendations" />
              {data.recommendations.map((feature, index) => {
                return (
                  <Recommendation id={`reco-${index}`} data={feature} />
                );
              }
              )}
            </div>
          </div>

          {/* EXPERIENCES */}
          <div className="w-full flex-col p-4 md:p-5 print:p-16">
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
          <div className="w-full flex-col p-4 md:p-5 print:p-16">
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
        </div>
      </div>
    </div>
  );
}
