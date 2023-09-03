const Card = (props) => {
    return (
        <>
            <div className={"bg-[#8E5E8A] dark:bg-[#B6BA64] h-[87px] w-[470px] rounded-lg flex flex-col justify-center items-center font-[Inter] text-white dark:text-black"}>
                {props.children}
            </div>
        </>
    )
}
const LandingTokenomicsCard = () => {
    return (
        <div className="flex flex-row flex-wrap w-full mx-auto justify-center items-center gap-4 my-6">
            <Card>
                <div className="text-center">
                    <h1 className="text-[16px]">Token Name</h1>
                    <p className="text-[18px]">ACAI</p>
                </div>
            </Card>
            <Card>
                <div className="text-center">
                    <h1 className="text-[16px]">Token Symbol</h1>
                    <p className="text-[18px]">ACAI</p>
                </div>
            </Card>
            <Card>
                <div className="text-center">
                    <h1 className="text-[16px]">Token Supply</h1>
                    <p className="text-[18px]">1.000.000.000</p>
                </div>
            </Card>
            <Card Class="">
                <div className="text-center">
                    <h1 className="text-[16px]">Token Network</h1>
                    <p className="text-[18px]">Polygon</p>
                </div>
            </Card>
            <Card>
                <div className="text-center">
                    <h1 className="text-[16px]">Contract Address</h1>
                    <p className="text-[18px]">0x79d2621982F7...2f0BAF26114CA2878</p>
                </div>
            </Card>
        </div>
    )
}
export default LandingTokenomicsCard;