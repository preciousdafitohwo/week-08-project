"use client";
import { useRouter } from "next/navigation";

export default function Search () {
  const router = useRouter();
  const onChange = (e) => {
    router.push(`/categories/${e.target.value}`);
  };
  return (
    <div>
      <select name="category" required onChange={onChange}>
                    <option value="" required>--Please choose an option--</option>
                    <option value="5">Art</option>
                    <option value="1">Education</option>
                    <option value="4">Employment</option>
                    <option value="2">Health</option>
                    <option value="3">Sports</option>
                    
                </select>
    </div>
  );
}