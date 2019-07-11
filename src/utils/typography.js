import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    { name: "Oswald", styles: [400, 500] },
    { name: "Lato", styles: [400, 500] },
  ],
  headerFontFamily: ["Oswald"],
  bodyFontFamily: ["Lato"],
  headerGray: "20",
  headerWeight: "400",
  bodyWeight: "400",
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
