const Under25Tax = ({ tabIndex, familyMemberData, familyMemberDataChange }) => {
  return (
    <div className="flex flex-row justify-start">
      <div className="checkbox-wrapper-22 pt-1">
        <label className="switch" htmlFor="under25">
          <input
            type="checkbox"
            checked={familyMemberData[tabIndex].under25}
            onChange={(e) => {
              familyMemberDataChange(
                tabIndex,
                familyMemberData[tabIndex].name,
                familyMemberData[tabIndex].grossIncome,
                e.target.checked,
                familyMemberData[tabIndex].pDiscount,
                familyMemberData[tabIndex].newlyWedDiscount,
                familyMemberData[tabIndex].familyDiscount,
                familyMemberData[tabIndex].netIncome
              );
            }}
            id="under25"
          />
          <div className="slider round"></div>
        </label>
      </div>
      <span className="text-center text-sm font-semibold pl-3 pt-2">25 év alattiak SZJA mentessége</span>
    </div>
  );
};

export default Under25Tax;
