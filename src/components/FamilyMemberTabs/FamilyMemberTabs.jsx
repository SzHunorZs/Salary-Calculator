import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddNewFailyMember from "./components/AddNewFamilyMember";
import classNames from "classnames";

const FamilyMemberTabs = ({
  familyMemberData,
  familyMemberDataChange,
  tabIndex,
  setTabIndex,
}) => {
  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(parseInt(index))}
    >
      <div className="flex flex-row gap-5">
        <TabList>
          <div className="flex flex-row gap-3">
            {Object.keys(familyMemberData).map((index) => (
              <Tab
                className={classNames({active: tabIndex === parseInt(index)},"flex justify-center min-w-24 max-w-52 max-h-10 outline outline-green-950  hover:bg-green-500 hover:outline-green-950 hover:text-white rounded-md p-1 bg-white")}
                key={index}
              >
                <h5 className=" flex overflow-hidden gap-5">{familyMemberData[index].name}</h5>
              </Tab>
            ))}
          </div>
        </TabList>

        <AddNewFailyMember
          setTabIndex={setTabIndex}
          familyMemberData={familyMemberData}
          familyMemberDataChange={familyMemberDataChange}
        />
      </div>

      {Object.keys(familyMemberData).map((index) => (
        <TabPanel key={index}></TabPanel>
      ))}
    </Tabs>
  );
};

export default FamilyMemberTabs;
