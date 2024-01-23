"use client";
import Image from "next/image";
import React from "react";
import { FaCamera } from "react-icons/fa";

interface InputImageProps {
  id?: string;
  image?: string | null | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputImage: React.FC<InputImageProps> = ({ id, image, onChange }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="flex justify-center items-center relative group cursor-pointer"
      >
        <FaCamera className="absolute hidden group-hover:flex text-5xl z-10" />
        <Image
          src={image || "/person.png"}
          alt="person"
          width={200}
          height={200}
          className="bg-white  rounded-full w-[200px] h-[200px]  group-hover:opacity-40 group-hover:ring-1 group-hover:ring-sky-500"
        />
      </label>
      <input
        type="file"
        onChange={onChange}
        accept="image/*"
        id={id}
        className="hidden"
      />
    </>
  );
};

export default InputImage;
