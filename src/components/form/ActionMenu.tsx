import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ActionMenuProps {
  id: number;
  basePath: string;   // users / tasks
 
}

const ActionMenu = ({ id, basePath }: ActionMenuProps) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  /* Close on outside click */
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () => document.removeEventListener("mousedown", close);
  }, []);

  // View
  const handleView = () => {
    navigate(`/${basePath}/view/${id}`);
    setOpen(false);
  };

  // Edit
  const handleEdit = () => {
    navigate(`/${basePath}/edit/${id}`);
    setOpen(false);
  };


  return (
    <div ref={menuRef} className="relative inline-block text-left font-app">

      {/* Three Dots Button */}
      <button
        onClick={() => setOpen(p => !p)}
        className="
          w-8 h-8 flex items-center justify-center
          rounded-full
          text-xl font-bold
          text-gray-600
          hover:bg-gray-100
          focus:outline-none
          font-app
          
        "
      >
        ⋮
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 z-50
            w-36
            origin-top-right
            rounded-md
            bg-white
            shadow-lg
            ring-1 ring-black ring-opacity-5
          "
        >

          <div className="py-1">

            {/* View */}
            <button
              onClick={handleView}
              className="
                w-full text-left px-4 py-2 text-sm
                text-gray-700
                hover:bg-gray-100
                transition
              "
            >
              View
            </button>

            {/* Edit */}
            <button
              onClick={handleEdit}
              className="
                w-full text-left px-4 py-2 text-sm
                text-gray-700
                hover:bg-gray-100
                transition
              "
            >
              Edit
            </button>

            {/* Delete */}
            <button
             
              className="
                w-full text-left px-4 py-2 text-sm
                text-red-600
                hover:bg-red-50
                transition
              "
            >
              Delete
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default ActionMenu;
