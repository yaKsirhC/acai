const TokenDistributionCard = () => {
    return (
        <>
            <div className="flex flex-col gap-4">

                <div className={`w-[705px]  bg-[#00000040] dark:bg-[#1E1E1E] font-[Inter] rounded-md flex flex-col justify-center items-start h-auto border-8 border-transparent border-l-[#F95858]`}>
                    <div className="mx-4 px-6 py-2">
                        <div className="text-[14px] text-white font-bold">
                            <span className={`text-[#F95858]`}>40%</span> - Ecosystem
                        </div>
                        <p className="text-white mt-1 text-[13px]">
                        i. Development, subscriptions, partnerships, bug bounty, servers
                            <br />
                            ii. Cliff: 0 months. Linear Vesting: 1% of total vested tokens are unlocked monthly
                            <br />
                            iii. Vesting Period: 8 years and 4 months
                        </p>
                    </div>
                </div>

                <div className={`w-[705px] bg-[#00000040] dark:bg-[#1E1E1E] font-[Inter] rounded-md flex flex-col justify-center items-start h-auto border-8 border-transparent border-l-[#9747FF]`}>
                    <div className="mx-4 px-6 py-2">
                        <div className="text-[14px] text-white font-bold">
                            <span className={`text-[#9747FF]`}>20%</span> - Treasury
                        </div>
                        <p className="text-white mt-1 text-[13px]">
                        i. Reserve for a problem or an unthinkable situation
                            <br />
                            ii. Cliff: 5 years. Linear Vesting: 2% of total vested tokens are unlocked monthly
                            <br />
                            iii. Vesting Period: 4 years and 2 months
                        </p>
                    </div>
                </div>

                <div className={`w-[705px] bg-[#00000040] dark:bg-[#1E1E1E] font-[Inter] rounded-md flex flex-col justify-center items-start h-auto border-8 border-transparent border-l-[#471443]`}>
                    <div className="mx-4 px-6 py-2">
                        <div className="text-[14px] text-white font-bold">
                            <span className={`text-[#471443]`}>11%</span> - Community
                        </div>
                        <p className="text-white mt-1 text-[13px]">
                        i. Incentives as airdrop, prizes for tournaments, giveaways, gasless transactions
                            <br />
                            ii. Cliff: 0 months. Linear Vesting: 10% of total vested tokens are unlocked monthly
                            <br />
                            iii. Vesting Period: 10 months
                        </p>
                    </div>
                </div>

                <div className={`w-[705px] bg-[#00000040] dark:bg-[#1E1E1E] font-[Inter] rounded-md flex flex-col justify-center items-start h-auto border-8 border-transparent border-l-[#B6BA64]`}>
                    <div className="mx-4 px-6 py-2">
                        <div className="text-[14px] text-white font-bold">
                            <span className={`text-[#B6BA64]`}>10%</span> - Multichain
                        </div>
                        <p className="text-white mt-1 text-[13px]">
                        i. Provide tokens for cross-chain swap service
                            <br />
                            ii. Cliff: 6 months. Linear Vesting: 2% of total vested tokens are unlocked monthly
                            <br />
                            iii. Vesting Period: 4 years and 2 months
                        </p>
                    </div>
                </div>

                <div className={`w-[705px] bg-[#00000040] dark:bg-[#1E1E1E] font-[Inter] rounded-md flex flex-col justify-center items-start h-auto border-8 border-transparent border-l-[#F7931A]`}>
                    <div className="mx-4 px-6 py-2">
                        <div className="text-[14px] text-white font-bold">
                            <span className={`text-[#F7931A]`}>10%</span> - Pre-sale
                        </div>
                        <p className="text-white mt-1 text-[13px]">
                        i. Tokens for sale in the launchpad to add liquidity to the project
                            <br />
                            ii. Cliff: 6 months. Linear Vesting: 2% of total vested tokens are unlocked monthly
                            <br />
                            iii. Vesting Period: 4 years and 2 months
                        </p>
                    </div>
                </div>

                <div className={`w-[705px] bg-[#00000040] dark:bg-[#1E1E1E] font-[Inter] rounded-md flex flex-col justify-center items-start h-auto border-8 border-transparent border-l-[#26A17B]`}>
                    <div className="mx-4 px-6 py-2">
                        <div className="text-[14px] text-white font-bold">
                            <span className={`text-[#26A17B]`}>05%</span> - Liquidity
                        </div>
                        <p className="text-white mt-1 text-[13px]">
                        i. Tokens to be put in liquidity pool after presale
                            <br />
                            ii. Liquidity pool locked for 10 years
                        
                        </p>
                    </div>
                </div>

                <div className={`w-[705px] bg-[#00000040] dark:bg-[#1E1E1E] font-[Inter] rounded-md flex flex-col justify-center items-start h-auto border-8 border-transparent border-l-[#5865F2]`}>
                    <div className="mx-4 px-6 py-2">
                        <div className="text-[14px] text-white font-bold">
                            <span className={`text-[#5865F2]`}>03%</span> - Stake Rewards
                        </div>
                        <p className="text-white mt-1 text-[13px]">
                        i. Rewards to users that use stake or other mechanism that generate token rewards
                            <br />
                            ii. Cliff: 0 month. Linear Vesting: 5% of total vested tokens are unlocked monthly
                            <br />
                            iii. Vesting Period: 1 year and 8 months
                        </p>
                    </div>
                </div>

                <div className={`w-[705px] bg-[#00000040] dark:bg-[#1E1E1E] font-[Inter] rounded-md flex flex-col justify-center items-start h-auto border-8 border-transparent border-l-[#8E5E8A]`}>
                    <div className="mx-4 px-6 py-2 ">
                        <div className="text-[14px] text-white font-bold">
                            <span className={`text-[#8E5E8A]`}>01%</span> - Marketing
                        </div>
                        <p className="text-white mt-1 text-[13px]">
                        i. Marketing campaigns and social media support
                            <br />
                            ii. Cliff: 1 month. Linear Vesting: 2% of total vested tokens are unlocked monthly
                            <br />
                            iii. Vesting Period: 4 years and 2 months
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TokenDistributionCard;