import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import React, { useState } from "react";

export const NavBar = () => {
    const [selected, setSelected] = useState("");

    const HandleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
        setSelected(event.target.value);

    return (
        <div className={styles.navbar}>
            <div>
                <ul>
                    <li>
                        <Link to={"howtouse"}>Как использовть</Link>
                    </li>
                    <li>
                        <label>
                            Eще
                            <select value={selected} onChange={HandleOnChange}>
                                <option>Линк о нас</option>
                                <option>Линк политика конф</option>
                                <option>Линк</option>
                            </select>
                        </label>
                    </li>
                    <li>Link1</li>
                </ul>
            </div>
        </div>
    );
};

// import { useState } from "react";

// export const CustomDropdown = () => {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState<string | null>(null);

//   const options = ["Опция 1", "Опция 2", "Опция 3"];

//   const handleSelect = (option: string) => {
//     setSelected(option);
//     setOpen(false);
//   };

//   return (
//     <div style={{ position: "relative", width: "200px" }}>
//       <button
//         onClick={() => setOpen(!open)}
//         style={{ width: "100%", padding: "8px" }}
//       >
//         {selected || "Выберите опцию"}
//       </button>

//       {open && (
//         <ul
//           style={{
//             position: "absolute",
//             top: "100%",
//             left: 0,
//             right: 0,
//             border: "1px solid #ccc",
//             margin: 0,
//             padding: 0,
//             listStyle: "none",
//             background: "white",
//             zIndex: 10,
//           }}
//         >
//           {options.map((option) => (
//             <li
//               key={option}
//               onClick={() => handleSelect(option)}
//               style={{ padding: "8px", cursor: "pointer" }}
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
