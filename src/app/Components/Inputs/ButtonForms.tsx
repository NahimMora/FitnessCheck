import React from 'react';

export interface ButtonFormsProps {
  title: string;
  onClickFunction: any;
}

const ButtonForms = ({ title, onClickFunction }: ButtonFormsProps) => {
  return (
    <>
      <button
        className='p-4 mx-5 border-2 border-blue-500 bg-blue-500 rounded-full text-white hover:bg-blue-900 transition duration-300 ease-in-out'
        onClick={(e) => onClickFunction(e)}
        >
        {title}
      </button>
    </>
  );
};

export default ButtonForms;
