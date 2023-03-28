import React, { useEffect, useState, useRef } from "react";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const List = ({ items, title }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const ref = useRef();

  const handleItemClick = (item) => {
    setOpenModal(true);
    setSelectedData(item);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useOnClickOutside(ref, handleClose);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  return (
    <div className="details-container">
      <div className="details-header">{title}</div>
      <div className="list-container">
        {items.map((item, index) => (
          <div
            key={index}
            className="list-item"
            onClick={() => handleItemClick(item)}
          >
            <div className="item-name">{item.title}</div>
            <div className="item-line">
              <hr></hr>
            </div>
            <div className="item-price">{item.price?.toLocaleString()}</div>
          </div>
        ))}
      </div>
      {openModal && (
        <div className="popup">
          <div className="popup-inner" ref={ref}>
            <div className="popup-header">
              <div className="selected-item-name">{selectedData.title}</div>
              <button className="popup-close" onClick={handleClose}>
                &times;
              </button>
            </div>
            <div className="popup-content">
              <div className="popup-price">{openModal.price}</div>
              <div className="popup-description">
                <div className="selected-list-container">
                  <img
                    src={selectedData.image}
                    className="select-item-image"
                    alt={selectedData.title}
                  />
                  <p className="food-description">{selectedData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
