const PersonalTax = ({tabIndex, familyMemberData, familyMemberDataChange}) => {
    return (
        <div className="flex flex-row justify-start">
    <div className="checkbox-wrapper-22 pt-1">
      <label className="switch" htmlFor="personalDiscount">
        <input
          type="checkbox"
          checked={familyMemberData[tabIndex].pDiscount}
          onChange={(e) => {
            familyMemberDataChange(
              tabIndex,
              familyMemberData[tabIndex].name,
              familyMemberData[tabIndex].grossIncome,
              familyMemberData[tabIndex].under25,
              e.target.checked,
              familyMemberData[tabIndex].newlyWedDiscount,
              familyMemberData[tabIndex].familyDiscount,
              familyMemberData[tabIndex].netIncome
            );
        }}
        id="personalDiscount"
        />
        <div className="slider round"></div>
      </label>
    </div> 
      <span className="text-center text-sm font-semibold pl-3 pt-2">Személyi adókedvezmény</span>
        </div>
    );
}
 
export default PersonalTax;