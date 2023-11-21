import { ChangeEvent } from "react";
import LoginInput from "./LoginInput";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface ILoginItemsProps {
  label: string
  inputType: string
  name: string
  placeholder: string
  reg_msg: string
  register: UseFormRegister<FieldValues>

  errors: FieldErrors<FieldValues>
}

export default function LoginItems({
  label,
  name,
  inputType,
  placeholder,
  reg_msg,
  errors,
  register
}: ILoginItemsProps) {
    return (
        <>
            <div className="mt-3 first:mt-0">
                <h2>{label}</h2>
                <input type={inputType} placeholder={placeholder} className="border border-[#ddd] w-full p-2" {...register(name, {
                  required: reg_msg
                })}/>
                {errors[name] && <p className="mt-1 text-xs text-red-500">* {errors[name]?.message as string}</p>}
            </div>
        </>
    );
}
