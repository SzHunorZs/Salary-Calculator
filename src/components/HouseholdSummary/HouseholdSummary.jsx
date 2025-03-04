import classNames from "classnames";

const HouseholdSummary = ({ familyMemberData, tabIndex, setTabIndex }) => {
  let totalNetIncome = 0;
  for (const index in familyMemberData) {
    totalNetIncome += parseInt(familyMemberData[index].netIncome);
  }
  return (
    <> <div className="text-xl">

      <h2 className="text-center">Háztartás összesített jövedelme</h2>
      <div className="flex flex-row font-semibold gap-0">
        <p className="w-1/2">Családtag</p>
        <p className="w-1/2">Netto bér</p>
      </div>
      <div className="summary flex flex-col bg-slate-100">

      {Object.keys(familyMemberData).map((index) => (
        <div
        key={index}
        className={classNames("flex flex-row gap-0 hover:bg-green-400 bg-slate-100", { active: tabIndex == parseInt(index) })}
        onClick={() => setTabIndex(parseInt(index))}
        >
          <p className="w-1/2 outline-1 outline-black outline pl-3 gap-0">{familyMemberData[parseInt(index)].name}</p>
          <p className="w-1/2 outline-1 outline-black outline pl-3 gap-0">
            {familyMemberData[index].netIncome}
            {" "}
            Ft
          </p>
        </div>
      ))}
      <div className="flex flex-row">
        <p className="w-1/2 outline-1 outline-black outline pl-3">Összesen:</p>
        <p className="w-1/2 font-semibold outline-1 outline-black outline pl-3">
          {totalNetIncome}{" "}
          Ft
        </p>
      </div>
      </div>
      </div>
    </>
  );
};

export default HouseholdSummary;
