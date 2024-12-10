import React from 'react';
// import Header from './Header';
import SearchBar from './SearchBar';
import CreateNewButton from './Create_New_Button';
import DateDropdown from './DateDropdown';
import ViewOptions from './ViewOptions';
import FolderGrid from './FolderGrid';
import DeleteButton from './DeleteButton';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';

function Layout() {
  return (
    <>
      <NavigationArrows title={'Knowledge Repository'}/>
      <div className="flex overflow-hidden flex-col  max-md:pb-24">
        {/* <Header /> */}
        <main className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex items-center p-4 w-full bg-sky-200 max-md:max-w-full relative rounded-t-lg">
            <div className="absolute right-10">
              <CreateNewButton />
            </div>
            <div className="mx-auto">
              <SearchBar />
            </div>
          </div>

          {/* <DateDropdown /> */}
          <section className="flex flex-col px-4 pt-2.5 pb-5 w-full bg-white max-md:max-w-full rounded-b-lg">
            <ViewOptions />
            <FolderGrid />
          </section>
          {/* <DeleteButton /> */}
        </main>
      </div>
    </>
  );
}

export default Layout;
