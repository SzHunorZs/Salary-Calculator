const NewlyWedTax = ({
  tabIndex,
  familyMemberData,
  familyMemberDataChange,
  handleDateChange,
}) => {
  return (
    <div className="flex flex-row justify-start">
      <div className="checkbox-wrapper-22">
        <label className="switch" htmlFor="newlyWed">
          <input
            type="checkbox"
            checked={familyMemberData[tabIndex].newlyWedDiscount[0]}
            onChange={(e) => {
              let nW = [
                e.target.checked,
                familyMemberData[tabIndex].newlyWedDiscount[1],
                familyMemberData[tabIndex].newlyWedDiscount[2],
              ];
              familyMemberDataChange(
                tabIndex,
                familyMemberData[tabIndex].name,
                familyMemberData[tabIndex].grossIncome,
                familyMemberData[tabIndex].under25,
                familyMemberData[tabIndex].pDiscount,
                nW,
                familyMemberData[tabIndex].familyDiscount,
                familyMemberData[tabIndex].netIncome
              );
            }}
            id="newlyWed"
          />
          <div className="slider round"></div>
        </label>
      </div>
      <div className="flex flex-row gap-3 justify-center">

      <span className="text-center text-sm font-semibold pl-3 pt-2" >Friss házasok adókedvezménye</span>
      {familyMemberData[tabIndex].newlyWedDiscount[0] && (
          <input
          className="flex justify-self-center text"
          type="date"
          value={familyMemberData[tabIndex].newlyWedDiscount[1]}
          onChange={(e) => handleDateChange(e)}
          />
        )}
        <div className="flex justify-center mt-2">

      {familyMemberData[tabIndex].newlyWedDiscount[2] &&
        familyMemberData[tabIndex].newlyWedDiscount[0] && (
            <span className="flex justify-center rounded-full h-5 text-center text-xs px-1 pt-0.5 text-white bg-green-600">Jogosult</span>
        )}
      {!familyMemberData[tabIndex].newlyWedDiscount[2] &&
        familyMemberData[tabIndex].newlyWedDiscount[0] && (
            <span className="flex flex-row rounded-full h-5 w-auto px-1 pt-0.5 text-white text-xs  bg-red-700 ">Nem jogosult</span>
        )}
        </div>
        </div>
    </div>
  );
};

export default NewlyWedTax;
