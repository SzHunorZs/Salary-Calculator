import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const HouseholdSalaryCalculator = ({
  familyMemberData,
  familyMemberDataChange,
  tabIndex,
  setTabIndex,
  setFamilyMemberData
}) => {
  return (
    <>
      <header>
        <div className="flex w-full flex-row pl-5">
        <FamilyMemberTabs
          familyMemberData={familyMemberData}
          familyMemberDataChange={familyMemberDataChange}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          />
          </div>
      </header>
      <main>
      <div className="flex w-full flex-col md:flex-row gap-8 md:gap-5 px-5 pb-5">
          <div className="flex flex-col gap-3 w-1/2 rounded-3xl bg-gray-200 p-10 " >
          <SalaryCalculator
          familyMemberData={familyMemberData}
          familyMemberDataChange={familyMemberDataChange}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          setFamilyMemberData={setFamilyMemberData}
          />
          </div>
          <div className= "flex flex-col gap-3 pl-10 w-1/2 rounded-3xl bg-gray-200 p-10">
        <HouseholdSummary 
          familyMemberData={familyMemberData}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
        />
        </div>
        </div>
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
