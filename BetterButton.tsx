import { ComponentProps } from "react";

// BetterButton.tsx
type ButtonProps = ComponentProps<"button">;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className="better-btn">
      {children || "Click me"}
    </button>
  );
};

export default Button;

// ------- Notes --------
//   Generally, the main idea behind my implementation was to make Button component more generic,
//   so that it can be used in different scenarios, improving namings and providing type safety along the way.
//   That being said, I ended adjusting the following things:
//      1. Improved component name from Btn -> to Button. It's better to be careful with shortcuts when naming components,
//         especially since it's not that complicated to spell the word Button as a whole, it gives a clearer picture
//         about the component and its purpose.
//      2. Increased the amount of props Button accepts by allowing common button HTML element props to be passed, which
//         allows the component to be way more customizable and easy to use -> removes click (poorly named)
//         and text props; the same behavior can be now achieved bu providing onClick and children props. Utilizes ComponentProps
//         type from React with common "button" as generic to support that.
//      3. Removes inline styles and moves them to css file below (BetterButton.css, the file itself wasn't created,
//         based on requirements). All the inline styles are now replaced with .better-btn class, making sure that
//         it achieves the same visual appearance. + it's could've structured in a separate css file with the help of variables
//      4. Supports rendering not only a text inside the button, but any possible ReactElement (icons, loaders, fragments. etc.)
//         as children. Defaults back to rendering "Click me" text if children were not passed.
// ----------------------

// BetterButton.css
// :root {
//   --spacing-s: 4px;
//   --spacing-m: calc(var(--spacing-s) * 2.5);

//   --color-white: #ffffff;
//   --color-btn-primary: #0000ff;
// }

// .better-btn {
//   padding: var(--spacing-m);
//   color: var(--color-white);
//   background-color: var(--color-btn-primary);
// }

// ----------------------

// MessyButton.tsx
// export function Btn({ click, text }) {
//   return (
//     <button
//       onClick={click}
//       style={{ backgroundColor: "blue", padding: 10, color: "white" }}
//     >
//       {text ? text : "Click me"}
//     </button>
//   );
// }
