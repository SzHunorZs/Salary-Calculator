import BenefittedCounter from "./BenefittedCounter";

const FamilyTax = ({
    tabIndex,
    familyMemberData,
    familyMemberDataChange,
    handleFamilyDiscount,
}) => {
    return (
      <>
    <div className="flex flex-row">
      <div className="checkbox-wrapper-22">
        <label className="switch" htmlFor="familyDiscount">
          <input
            type="checkbox"
            checked={familyMemberData[tabIndex].familyDiscount[0]}
            onChange={(e) => {
              let fD = [
                e.target.checked,
                familyMemberData[tabIndex].familyDiscount[1],
                familyMemberData[tabIndex].familyDiscount[2],
              ];
              familyMemberDataChange(
                tabIndex,
                familyMemberData[tabIndex].name,
                familyMemberData[tabIndex].grossIncome,
                familyMemberData[tabIndex].under25,
                familyMemberData[tabIndex].pDiscount,
                familyMemberData[tabIndex].newlyWedDiscount,
                fD,
                familyMemberData[tabIndex].netIncome
              );
            }}
            id="familyDiscount"
          />
          <div className="slider round"></div>
        </label>
      </div>
      <span className="text-center text-sm font-semibold pl-3 pt-2">Családi adókedvezmény</span>
    </div>
    <div>
    <BenefittedCounter
    tabIndex={tabIndex}
    familyMemberData={familyMemberData}
    handleFamilyDiscount={handleFamilyDiscount}
    />
    </div>
  </>
  );
};

export default FamilyTax;
