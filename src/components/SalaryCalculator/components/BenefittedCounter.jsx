const BenefittedCounter = ({tabIndex, familyMemberData, handleFamilyDiscount }) => {
  return (
    <>
      {familyMemberData[tabIndex].familyDiscount[0] && (
        <div className="flex flex-row content-center gap-2 font-bold">
          <div className="flex flex-row gap-2">
            <button className=" bg-white text-black hover:bg-green-500 hover:text-white font-extrabold text-xs w-5 h-5 rounded-full shadow hover:shadow-md outline hover:outline-green-900 ease-linear transition-all duration-150" id="decDep" onClick={(e) => handleFamilyDiscount(e)}>-</button>
            <span>{familyMemberData[tabIndex].familyDiscount[1]}</span>
            <button className=" bg-white text-black hover:bg-green-500 hover:text-white font-bold text-xs w-5 h-5 rounded-full shadow hover:shadow-md outline hover:outline-green-900 ease-linear transition-all duration-150" id="incDep" onClick={(e) => handleFamilyDiscount(e)}>
              +
            </button>
          </div>
          <p className="flex text-sm">Eltartott, ebből kedvezményezett:</p>
          <div className="flex flex-row gap-2 text-center">
            <button className=" bg-white text-black hover:bg-green-500 hover:text-white font-bold text-xs w-5 h-5 rounded-full shadow hover:shadow-md outline hover:outline-green-900 ease-linear transition-all duration-150" id="decBen" onClick={(e) => handleFamilyDiscount(e)}>
              -
            </button>
            <span>{familyMemberData[tabIndex].familyDiscount[2]}</span>
            <button className=" bg-white text-black hover:bg-green-500 hover:text-white font-bold text-xs w-5 h-5 rounded-full shadow hover:shadow-md outline hover:outline-green-900 ease-linear transition-all duration-150" id="incBen" onClick={(e) => handleFamilyDiscount(e)}>
              +
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BenefittedCounter;
