"use client";
import React, { useState } from "react";
import { foodArrays } from "../../../../utils/cartData";
import { AiOutlineSetting } from "react-icons/ai";
import { MdFilterList } from "react-icons/md";
import MenuCard from "./MenuCard";
import { openModal } from "@/redux/features/modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import AddMenuModal from "./AddMenuModal";
import { categories } from "../../../../utils/categoriesData";
import FilterModal from "./FilterModal";
import { addItem } from "@/redux/features/addItem/addItemSlice";

export default function MenuSetting() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [addedItems, setAddedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const gridRows = 3;
  const gridCols = 5;

  // const menuItems = useSelector((state) => state.menu.items);

  const handleOpenModal = () => {
    dispatch(openModal());
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddItem = (newItem) => {
    setAddedItems((prevItems) => [...prevItems, newItem]);
    console.log(addedItems);
  };

  //modal filter handling
  const handleOpenModalFilter = () => {
    dispatch(openModal());
    setIsFilterModalOpen(true);
  };

  const handleCloseModalFilter = () => {
    setIsFilterModalOpen(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMenuItems = addedItems.slice(indexOfFirstItem, indexOfLastItem);

  const emptySlots = gridCols * gridRows - currentMenuItems.length;

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageCount = Math.ceil(addedItems.length / itemsPerPage);
  const currentPageCount = Math.min(currentPage, pageCount);

  return (
    <div className="flex flex-col border w-[1500px] h-[829px] border-secondary rounded-lg px-5">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold p-2">My Menu items</div>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search menu"
          className="border border-secondary rounded-[40px] w-[280px] h-[37px] p-2 outline-none focus:ring-2 focus:ring-primary"
        />
        <button onClick={handleOpenModalFilter}>
          <div className="border border-secondary rounded-[40px] w-[130px] h-[37px] cursor-pointer flex items-center justify-center text-secondary">
            <MdFilterList size={30} color="grey" />
            <span>Filter</span>
          </div>
        </button>
      </div>
      <div className="p-2 flex items-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="px-2 border border-primary rounded-lg mx-2 whitespace-nowrap shadow-md text-primary cursor-pointer"
          >
            {category.name}
          </div>
        ))}
        <button
          className="ml-[200px] flex items-center gap-2 bg-primary p-[15px] rounded-lg border border-gray font-bold"
          onClick={handleOpenModal}
        >
          <span>+</span>
          <span className="text-sm">Add Menu modal</span>
        </button>
      </div>
      <div
        className={`grid grid-cols-5 grid-rows-3 gap-3 mb-1 overflow-x-hidden w-full`}
      >
        {/* {currentMenuItems.map((food, i) => (
          <MenuCard key={i} food={food} />
        ))} */}
        {/* add menu here */}
        {addedItems.map((addedItem, index) => (
          <MenuCard key={index} menuItem={addedItem} />
        ))}
        {emptySlots > 0 &&
          Array.from({ length: emptySlots }).map((_, index) => (
            <div key={currentMenuItems.length + index} />
          ))}
      </div>
      <div className="flex justify-between px-2 mt-4">
        <div>
          Showing {indexOfFirstItem + 1} - {indexOfLastItem}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={addedItems.length}
          currentPage={currentPageCount}
          pageCount={pageCount}
          paginate={paginate}
        />
      </div>
      {isFilterModalOpen && (
        <FilterModal handleCloseModalFilter={handleCloseModalFilter} />
      )}
      {isModalOpen && (
        <AddMenuModal
          handleCloseModal={handleCloseModal}
          handleAddItem={handleAddItem}
        />
      )}
    </div>
  );
}

// Pagination component
const Pagination = ({ currentPage, pageCount, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-2 mr-1  cursor-pointer ${
              currentPage === number
                ? "font-semibold border border-primary"
                : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};
