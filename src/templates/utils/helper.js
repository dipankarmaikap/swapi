export function randomColors() {
  const colors = [
    "#144a75",
    "#03363e",
    "#186146",
    "#ad5e17",
    "#8d232b",
    "#a81898",
    "#d52054",
    "#c72a1b",
    "#c44f00",
    "#febb10",
    "#6a27b9",
    "#3253e3",
    "#1272d6",
    "#02807a",
    "#068541",
    "#353535",
  ]

  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  return randomColor(colors)
}

export function removeSpace(str) {
  let urlPath = str
  urlPath = urlPath.replace(/\s/g, "-").toLowerCase()
  return urlPath
}
