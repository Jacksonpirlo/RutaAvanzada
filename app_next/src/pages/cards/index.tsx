import Card from "@/components/Card";
import { imgAndIcon } from "@/helpers/utils";
import Bagde from "@/components/Badge";
import { FcOk } from "react-icons/fc";
const manageIMGs = imgAndIcon();
const ShowCards = () => {
    return(
        <>
        <section className='flex bg-amber-50 flex-wrap gap-10 justify-center items-center'>
        <Card title="Search engine" 
              subtitle="optimization" 
              icon={manageIMGs.icon} 
              btnText="Learn more" 
              img={manageIMGs.img1} 
              classNameBg="bg-gray-100" 
              classNameBgTitle="bg-green-300 text-3xl font-extrabold" 
              classNameBgSecondTitle="text-2xl bg-green-300 w-45"
              BagdeProp={<Bagde label='Card active' Status={{type:"success"}} icon={<FcOk className="size-[20px]" />} title='Exito'/>}
        />

        <Card title="Pay-per-click" subtitle="advertising" icon={manageIMGs.icon} btnText="Learn more" img={manageIMGs.img2} classNameBg="bg-green-300" classNameBgTitle="bg-gray-100 text-3xl font-extrabold" classNameBgSecondTitle="text-2xl bg-gray-100 w-45" BagdeProp={<Bagde label='Card done' Status={{type:"info"}} icon={<FcOk className="size-[20px]" />} title='OK'/>}/>
        <Card title="Social Media" subtitle="Marketing" icon={manageIMGs.icon1} classBtnText="text-white" btnText="Learn more" img={manageIMGs.img3} classNameBg="bg-blue-950" classNameBgTitle="bg-gray-100 text-3xl font-extrabold" classNameBgSecondTitle="text-2xl bg-gray-100 w-45"/>
        <Card title="Email" subtitle="Marketing" icon={manageIMGs.icon} btnText="Learn more" img={manageIMGs.img4} classNameBg="bg-gray-100" classNameBgTitle="bg-green-300 text-3xl font-extrabold" classNameBgSecondTitle="text-2xl bg-green-300 w-45"/>
        <Card title="Content" subtitle="Creation" icon={manageIMGs.icon} btnText="Learn more" img={manageIMGs.img5} classNameBg="bg-green-300" classNameBgTitle="bg-gray-100 text-3xl font-extrabold" classNameBgSecondTitle="text-2xl bg-gray-100 w-45"/>
        <Card title="Analytics and " subtitle="Tracking" icon={manageIMGs.icon1} classBtnText="text-white" btnText="Learn more" img={manageIMGs.img6} classNameBg="bg-blue-950" classNameBgTitle="bg-green-300 text-3xl font-extrabold" classNameBgSecondTitle="text-2xl bg-green-300 w-45"/>
        </section>
        </>
    )
}

export default ShowCards;
