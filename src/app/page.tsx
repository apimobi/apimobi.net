import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center mb-20">
        <div className="">
          <Image 
            className=""
            src="/api-LOGO3.jpg"
            alt="apimobi logo"
            width={190}
            height={190}
            priority
          />
        </div>

        <div className="flex justify-center items-center bg-cyan-300 w-[300px] h-[160px] m-10">
          <a href="https://itunes.apple.com/us/artist/quelle-histoire/id440672464" target="_blank" >
            <div className="">
              <Image width={150} height={150} alt="" src="/logo-qh.png" className="" />
            </div>
          </a>
        </div>
        <div className="">
          <a href="https://itunes.apple.com/us/artist/quelle-histoire/id440672464" target="_blank">
            <div className="grid grid-cols-4" >
              <Image width={114} height={114} alt="" src="/app-icon-ulysse.png" />
              <Image width={114} height={114} alt="" src="/icon-pub-hdf.jpg" />
              <Image width={114} height={114} alt="" src="/gulli-cm1.png" />
              <Image width={114} height={114} alt="" src="/gulli-cm2.png" />
              <Image width={114} height={114} alt="" src="/app-icon-napoleonBD.png" />
              <Image width={114} height={114} alt="" src="/memo-culture-g.png" />
              <Image width={114} height={114} alt="" src="/memo-geo.png" />
              <Image width={114} height={114} alt="" src="/memo-rois.png" />
              <Image width={114} height={114} alt="" src="/memo-musique.png" />
              <Image width={114} height={114} alt="" src="/memo-presidentielles.png" />
              <Image width={114} height={114} alt="" src="/memo-cinema.png" />
              <Image width={114} height={114} alt="" src="/memo-histoire.png" />
              <Image width={114} height={114} alt="" src="/cristal.png" />
              <Image width={114} height={114} alt="" src="/devinci.png" />
              <Image width={114} height={114} alt="" src="/app-icon-francois1er.png" />
              <Image width={114} height={114} alt="" src="/app-icon-charlemagne.png" />
              <Image width={114} height={114} alt="" src="/app-icon-degaulle.png" />
              <Image width={114} height={114} alt="" src="/app-icon-jeannedarc.png" />
              <Image width={114} height={114} alt="" src="/app-icon-lincoln.png" />
              <Image width={114} height={114} alt="" src="/app-icon-louisxiv.png" />
              <Image width={114} height={114} alt="" src="/app-icon-mandela.png" />
              <Image width={114} height={114} alt="" src="/app-icon-napoleon.png" />
              <Image width={114} height={114} alt="" src="/app-icon-vauban.png" />
              <Image width={114} height={114} alt="" src="/app-icon-vercingetorix.png" />
            </div>
          </a>

        </div>

      </main>
      <footer className="flex flex-col items-center justify-center">
        <div className="">
          @copyright {new Date().getFullYear()}
        </div>
        <div className="">
          <a href="https://www.niaoti.com" className="">
            <Image 
              src="/niaoti_logo.png"
              alt="niaoti logo"
              width={100}
              height={100}
            />
          </a>
        </div>

      </footer>
    </div>
  );
}
