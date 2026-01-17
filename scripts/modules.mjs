export const byuiCourse = {
  code: "WDD 231",
  name: "Web Frontend Development",
  credits: 3
};
export function setSectionSelection(section) {
  console.log(`Selected section: ${section}`);
}
export function setTitle(title) {
  document.querySelector("h1").textContent = title;
}

export function renderSections(sections) {
  // render logic
}
