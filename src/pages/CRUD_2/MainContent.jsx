import React from 'react';
import SearchBar from './SearchBar';
import CreateNewButton from './CreateNewButton';
import Toolbar from './ToolBar';
import FileList from './FileList';
import Sidebar from './SideBar';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';

const MainContent = () => {
  return (
    <>
      <main className="flex overflow-hidden flex-col max-md:px-5 max-md:pb-24 ">
        <div className="flex items-center p-4 w-full bg-sky-200 max-md:max-w-full relative rounded-t-lg">
          <div className="absolute right-10">
            <CreateNewButton />
          </div>
          <div className="mx-auto">
            <SearchBar />
          </div>
        </div>
        <div className="flex max-md:pr-5">
          <section className="flex flex-col grow shrink-0 px-4 pt-2.5 pb-5 mr-0 bg-white basis-0 w-fit max-md:max-w-full rounded-b-lg">
            <Toolbar />
            <FileList />
          </section>
          {/* <Sidebar /> */}
        </div>
      </main>
    </>
  );
};

export default MainContent;
