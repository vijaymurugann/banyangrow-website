import presaleBonus from "../assets/presale.svg";
import referralSystem from "../assets/referal.svg";
import fixedStaking from "../assets/fixedstake.svg";
import liquidityPool from "../assets/liqpool.svg";
import flexibleStaking from "../assets/flexstake.svg";
import border from "../assets/border.svg"; // Removed 'star' since it's unused

// Define types for props
interface EarningBoxProps {
  image: string;
  title: string;
  description: string;
}

const WaysToEarn = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center">
      {/* Border SVG - Increased Size */}
      <div className="absolute w-[calc(70%+20px)] h-[calc(70%+20px)] flex items-center justify-center z-0 hidden md:flex">
        <img src={border} alt="Border" className="w-full h-full" />
      </div>

      {/* Mobile Title Placement */}
      <div className="w-full text-center md:hidden">
        <h1 className="text-white text-3xl font-bold">Ways to</h1>
        <h1 className="text-yellow-400 text-4xl font-bold">Earn with BGE</h1>
      </div>

      {/* Desktop Title (Inside Border) */}
      <div className="absolute w-[calc(60%+20px)] h-[calc(60%+20px)] flex flex-col items-center justify-center z-10 text-center hidden md:flex">
        <h1 className="text-white text-4xl md:text-4.5xl font-bold">Ways to</h1>
        <h1 className="text-yellow-400 text-5xl md:text-5.5xl font-bold">Earn with BGE</h1>
      </div>

      {/* Earning Options Grid */}
      <div className="relative flex flex-col md:flex-row md:flex-wrap items-center justify-center w-full max-w-3xl z-10 gap-4 md:gap-0">
        {/* Mobile View - Stacked Layout */}
        <div className="flex flex-col gap-4 md:hidden">
          <EarningBox image={presaleBonus} title="Pre-Sale Bonus" description="Buy now and get 3% extra tokens every month for 7 months." />
          <EarningBox image={fixedStaking} title="Fixed Staking" description="Earn 5% (3M), 11% (6M), or 24% (12M) on your investment." />
          <EarningBox image={referralSystem} title="Referral System" description="Earn up to 6.25% commission on 7-level referrals." />
          <EarningBox image={liquidityPool} title="Liquidity Pool" description="Earn 24% on every transaction while securing the ecosystem." />
          <EarningBox image={flexibleStaking} title="Flexible Staking" description="Earn 3% APY with easy withdrawals." />
        </div>

        {/* Desktop View - Absolute Positioning */}
        <div className="hidden md:flex md:flex-wrap md:justify-center w-full">
          <div className="absolute bottom-[220px] w-[350px]"><EarningBox image={presaleBonus} title="Pre-Sale Bonus" description="Buy now and get 3% extra tokens every month for 7 months." /></div>
          <div className="absolute left-[610px] top-[10%] w-[350px]"><EarningBox image={fixedStaking} title="Fixed Staking" description="Earn 5% (3M), 11% (6M), or 24% (12M) on your investment." /></div>
          <div className="absolute right-[78%] bottom-[20%] w-[350px]"><EarningBox image={referralSystem} title="Referral System" description="Earn up to 6.25% commission on 7-level referrals." /></div>
          <div className="absolute top-[220px] right-[600px] w-[350px]"><EarningBox image={liquidityPool} title="Liquidity Pool" description="Earn 24% on every transaction while securing the ecosystem." /></div>
          <div className="absolute top-[230px] left-[80%] w-[350px]"><EarningBox image={flexibleStaking} title="Flexible Staking" description="Earn 3% APY with easy withdrawals." /></div>
        </div>
      </div>
    </section>
  );
};

// Fixed TypeScript Errors in Props
const EarningBox = ({ image, title, description }: EarningBoxProps) => (
  <div className="flex bg-[#111] rounded-lg p-4 shadow-lg items-center w-[350px]">
    <img src={image} alt={title} className="w-10 h-10 mr-3" />
    <div>
      <h3 className="text-white font-bold text-sm">{title}</h3>
      <p className="text-gray-400 text-xs">{description}</p>
    </div>
  </div>
);

export default WaysToEarn;