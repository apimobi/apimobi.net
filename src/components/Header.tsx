import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RemixiconComponentType, RiMailFill, RiGithubFill, RiHomeFill, RiPhoneFill, RiLinkedinFill, RiFileUnknowFill } from '@remixicon/react'


type HeaderProps = {
    data: any
}

type Link = {
  icon: string;
  url: string;
  name: string;
};

const Components: { [key: string]: RemixiconComponentType } = {
  mail: RiMailFill,
  github: RiGithubFill,
  home: RiHomeFill,
  phone: RiPhoneFill,
  linkedin: RiLinkedinFill,
  undefined: RiFileUnknowFill
}

export default function Header({ data }: HeaderProps) {

    return (
      <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-1'>
            <div className=" grid grid-cols-1 md:grid-cols-2 h-full justify-center items-center">
                <div className="flex justify-center items-center ">
                  <Avatar className="min-w-20 min-h-20">
                      <AvatarImage src={`/${data.infos.avatar}`} />
                      <AvatarFallback>VM</AvatarFallback>
                  </Avatar>
                </div>
                <h2 className="text-center text-xl font-bold capitalize">{data.infos.firstname} {data.infos.lastname}</h2>
            </div>
            <div className=" flex justify-center items-center text-center">
                <h1 className="text-xl font-bold capitalize">{data.infos.title}</h1>
            </div>
            <div className=" flex justify-center items-center md:justify-end">
              <div className="flex flex-col  justify-center items-center sm:items-end">
                <div className="flex ">
                  <div className="text-right">
                    <span>{data.infos.address}</span>
                  </div>
                  <div className="pt-1 pl-2 pr-3">
                    <RiHomeFill
                            size={15}
                            color="black"
                            className=""
                    />
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <span>{data.infos.email}</span>
                  </div>
                  <div className="pt-1 pl-2 pr-3">
                    <RiMailFill
                            size={15}
                            color="black"
                            className=""
                    />
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <span>{data.infos.phone}</span>
                  </div>
                  <div className="pt-1 pl-2 pr-3">
                    <RiPhoneFill
                            size={15}
                            color="black"
                            className=""
                    />
                  </div>
                </div>


                
              </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1  p-1 '>
          <div className="grid grid-cols-1 md:grid-cols-1 h-full justify-center items-center px-36">
                <div className="bg-blue-200 rounded-3xl flex justify-center items-center ">
                {data.infos.links.map((elt:Link, index:number) => {
                    const MyComponent = Components[elt.icon] ?? Components.undefined;
                    return (
                      <div className="flex">
                        <div><a href={elt.url} key={index} target="_blank">{elt.name}</a></div>
                        <div className="pt-1 pl-2 pr-3">
                          <MyComponent
                            size={15}
                            color="black"
                            className=""
                          />
                        </div>
                      </div>
                      )
                })}
                </div>
            </div>
        </div>
      </>
    );
}
