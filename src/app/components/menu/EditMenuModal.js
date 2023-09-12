import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/features/modal/modalSlice";
import Image from "next/image";

export default function EditMenuModal({ food, handleCloseModal }) {
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState(food.foodName);
  const [category, setCategory] = useState(food.category);
  const [price, setPrice] = useState(food.priceTag);
  const [image, setImage] = useState(food.imageUrl);
  const [isAvailable, setIsAvailable] = useState(food.isAvailable);

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.targe.value);
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value, 10);
    if (!isNaN(newPrice) && newPrice >= 0) {
      setPrice(newPrice);
    } else {
      setPrice("");
    }
  };

  const handleToggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //action submit
  };

  const handleClose = () => {
    dispatch(closeModal());
    handleCloseModal();
  };

  //event listener to close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("bg-black")) {
        handleClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <aside className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-[808px] h-[709px]">
        <h2 className="text-xl font-semibold mb-4">edit Menu</h2>
        <div>
          <div className="flex items-center p-3 gap-3">
            <div className="border-secondary border rounded-lg h-[178px] w-[228px]">
              <Image
                // style={{ objectFit: "cover" }}
                src={food.imageUrl}
                alt="food-image"
                placeholder="blur"
                priority
                width={500}
                // height={500}
              />
            </div>
            <div className="border-secondary border rounded-lg h-[178px] w-[228px]">
              add picture
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Item Name:</label>
              <input
                type="text"
                value={itemName}
                onChange={handleItemNameChange}
                className="border border-secondary rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Category:</label>
              <select
                value={category}
                onChange={handleCategoryChange}
                className="border border-secondary rounded-lg p-2 w-full"
              >
                <option value="">Category</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Price (in Naira):</label>
              <input
                type="number"
                value={price}
                onChange={handlePriceChange}
                className="border border-secondary rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="block mb-2 mr-2">Availability:</label>
              <div
                className={`relative w-10 h-6 rounded-full cursor-pointer ${
                  isAvailable ? "bg-primary" : "bg-gray"
                }`}
                onClick={handleToggleAvailability}
              >
                <div
                  className={`absolute w-4 h-4 rounded-full m-1 transition-transform duration-300 ${
                    isAvailable ? "bg-white" : "bg-white"
                  }`}
                  style={{
                    transform: isAvailable
                      ? "translateX(100%)"
                      : "translateX(0)",
                  }}
                ></div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg mr-2"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg"
                type="submit"
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
}
