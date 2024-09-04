import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSquare, deleteSquare } from "./features/sheetSlice";
import { RootState } from "./store/store";
import { motion, AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const squares = useSelector((state: RootState) => state.sheet.squares);

  const squareVariants = {
    enter: { x: "-100%" },
    center: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <div className='flex flex-col items-center p-6'>
      <div className='mb-4'>
        <button
          className='px-4 py-2 bg-blue-500 text-white rounded mr-2'
          onClick={() => dispatch(addSquare())}
        >
          +
        </button>
        <button
          className='px-4 py-2 bg-red-500 text-white rounded'
          onClick={() => dispatch(deleteSquare())}
        >
          -
        </button>
      </div>
      <div className='flex overflow-hidden w-full h-24 relative'>
        <AnimatePresence initial={false}>
          {squares.map((square) => (
            <motion.div
              key={square.id}
              className='w-1/5 h-full mr-2'
              style={{
                backgroundColor: square.color,
                border: "1px solid lightgrey",
              }}
              variants={squareVariants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{ duration: 0.5 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
