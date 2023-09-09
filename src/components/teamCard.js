import Img1 from "../assets/img/team/IMG_8710.JPG";
import Img2 from "../assets/img/team/IMG_1418.jpg";
import Img3 from "../assets/img/team/IMG_8711.PNG";
const Card = (props) => {
    return (
        <>
            <div className="flex justify-center flex-col">
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-lg shadow-lg card-style" ></div>
                    <img src={props.src} alt={props.name} className="relative z-10 h-[350px] " />
                    <div className="font-[Inter] text-white dark:text-black mt-6">
                        <h1 className="text-2xl font-bold pb-3 redempt">{props.name}</h1>
                        <p className="font-medium text-lg">{props.position}</p>
                    </div>
                </div>
            </div>
        </>

    )
}
const TeamCard = () => {
    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center my-4">
                <Card src={Img1} name="Robert Son Hedler" position="CEO/Founder" />
                <Card src={Img2} name="Didia Goodluck" position="Project manager" />
                <Card src={Img3} name="i9 Networks" position="Associate partner" />
            </div>
        </>
    )
}
export default TeamCard;
