/**
 * Length = number of dimensions
 * Magnitude = 0-1
 */
type Point = number[]

const newPoint = (dimensionCount: number): Point =>
  new Array(dimensionCount).fill(null).map(() => Math.random())

const copyPoints = (points: Point[]): Point[] =>
  points.map((point) => point.map((n) => n))

/**
 * Lays out points in space
 * Optionally accepts prevPoints as a starting place
 * Assumes prevPoints are same dimesnions as nextPoints
 */
export const getLayout = ({
  dimensionCount,
  pointCount,
  prevPoints,
}: {
  dimensionCount: number
  pointCount: number
  prevPoints?: Point[]
}): Point[] => {
  // Create nextPoints, based on prevPoints, matching pointCount
  const nextPoints = prevPoints ? copyPoints(prevPoints) : []
  const diff = nextPoints.length - pointCount
  if (diff === 0) return nextPoints
  if (diff < 0) {
    for (let i = 0; i > diff; i--) {
      nextPoints.push(newPoint(dimensionCount))
    }
  } else {
    for (let i = 0; i < diff; i++) {
      nextPoints.pop()
    }
  }

  // Lay out points, according to dimensionCount
  switch (dimensionCount) {
    case 0:
      // no-op
      break
    case 1:
      layoutOne(nextPoints)
      break
    case 2:
      layoutTwo(nextPoints)
      break
    default:
      layoutN(nextPoints)
      break
  }

  return nextPoints
}

const layoutOne = (points: Point[]): void => {
  const half = Math.floor(points.length / 2)
  for (let i = 0, l = points.length; i < l; i++) {
    const point = points[i]
    if (!point) continue
    point[0] = half <= i ? 0 : 1
  }
}

const layoutTwo = (points: Point[]): void => {
  // TODO - layout points around circle
  const half = Math.floor(points.length / 2)
  for (let i = 0, l = points.length; i < l; i++) {
    const point = points[i]
    if (!point) continue
    point[0] = half <= i ? 0 : 1
  }
}

const layoutN = (points: Point[]): void => {
  // TODO - simulate points around sphere
  const half = Math.floor(points.length / 2)
  for (let i = 0, l = points.length; i < l; i++) {
    const point = points[i]
    if (!point) continue
    point[0] = half <= i ? 0 : 1
  }
}
